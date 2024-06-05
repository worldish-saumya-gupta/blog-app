<template>
<Navbar />
<div class="add-blog-frm">
    <div class="container">
        <div class="add-blog-form">
            <form @submit.prevent="save">
                <div class="form-element">
                    <label>Title</label>
                    <input type="text" v-model="title" required>
                </div>
                <div class="form-element">
                    <label>Description</label>
                    <input type="text" v-model="description" required>
                </div>
                <div class="form-element">
                    <label>Upload Blog Image</label>
                    <input type="file" accept="image/*" @change="hadleUploadBlogImage">
                </div>
                <div class="form-element">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: {
        Navbar
    },
    data() {
        return {
            articleArray: [],
            articleId: '',
            date: '',
            author: '',
            title: '',
            description: '',
            city: '',
            authorId: '',
            image: '',
            blogImage: '',
        }
    },
    computed: {
        getAuthor() {
            return this.$store.getters.getAuthor;
        },
        matchAuthor() {
            const id = parseInt(this.$route.params.id);
            // console.log(typeof id);
            return this.getAuthor.find(matchAuthor => matchAuthor.id === id)
        }
    },
    methods: {
        save() {
            const matchAuthor = this.matchAuthor;
            if (matchAuthor) {
                const newArticle = {
                    articleId: Date.now(),
                    date: new Date().toLocaleDateString('en-GB'),
                    title: this.title,
                    description: this.description,
                    author: matchAuthor.firstName + ' ' + matchAuthor.lastName,
                    city: matchAuthor.city,
                    authorId: matchAuthor.id,
                    image: matchAuthor.image,
                    blogImage: this.blogImage
                };
                const result = confirm("Do you want to save this blog?")
                if (result) {
                    //save article title to localStorage
                    const authorData = JSON.parse(localStorage.getItem('authorData'))
                    if (authorData) {
                        authorData.blogs.push(newArticle.title)
                        localStorage.setItem('authorData', JSON.stringify(authorData))
                    }

                    this.articleArray.push(newArticle) //  [{},{}] 

                    // console.log(typeof this.articleArray)
                    // //save article to local storage
                    this.saveLocal(this.articleArray);

                    //store articles to vuex store
                    this.$store.commit('ADD_ARTICLE', newArticle);

                    this.$router.push({
                        name: 'Home'
                    });
                    this.title = '';
                    this.description = '';
                    this.image = null;
                }
            } else {
                console.log("Author Not Found")
            }
        },

        saveLocal(newArticle) {
            // console.log(newArticle)
            let fetchArticle = JSON.parse(localStorage.getItem("articleData")) || []; //[[{}],[{}]
            fetchArticle.push(newArticle);
            localStorage.setItem("articleData", JSON.stringify(fetchArticle));
        },

        hadleUploadBlogImage(event) {
            const file = event.target.files[0];
            // console.log(file)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.blogImage = reader.result;
            }
        }

    }
}
</script>

<style scoped>
.add-blog-frm {
    background: url('../assets/Background-web-size.png')
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.add-blog-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;
    width: 70vw;
}

.add-blog-form form {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 2rem 4rem
}

.form-element {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0.5rem;
}

form button {
    background: #5bb9eb;
    padding: 10px 30px;
    border: none;
    color: #fff;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
    height: auto;
    align-items: center;
    width: 6rem;
}

form input {
    width: 60vw;
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
    border: 0.5px solid gray;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
}
</style>
