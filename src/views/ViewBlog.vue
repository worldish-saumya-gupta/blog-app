<template>
<button class="btn-primary">
    <router-link to="/">Back</router-link>
</button>
<div class="container">
    <div class="card" v-if="article">
        <div class="heading">
            <div class="title">
                <h1>{{ article.title }} </h1>
            </div>
            <div class="details">
                <img v-if="article.image" :src="article.image" class="authorImg">
                <p>By <strong>{{ article.author }}</strong></p>
                <p>Published On <strong>{{article.date}}</strong></p>
                <p>From <strong>{{article.city}}</strong></p>
            </div>
        </div>
        <hr>
        <img v-if="article.blogImage" :src="article.blogImage" class="blogImage">
        <p class="description">{{article.description}} </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'ViewBlog',
    computed: {
        getArticle() {
            return this.$store.getters.getArticles;
        },
        article() {
            const id = parseInt(this.$route.params.id);
            return this.getArticle.find(article => article.articleId === id);
        }
    },
}
</script>
    
    
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
}

.card {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem 2rem;
    margin: 0.5rem 1rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100vw;
}

.heading {
    display: flex;
    justify-content: space-between;
    margin: auto 3rem;
}

.description {
    margin: auto 3rem;
}

hr {
    margin: 2rem 3rem;
}

.btn-primary {
    background: #5bb9eb;
    padding: 10px 20px;
    border: none;
    color: #fff;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
    height: auto;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
    cursor: pointer;

}

a {
    text-decoration: none;
    color: white
}

.blogImage {
    width: 90%;
    height: 15rem;
    padding: 2rem 3rem;
}

.authorImg {
    border-radius: 50%;
    height: 100px;
    width: 100px;
}

@media only screen and (max-width: 600px) {
    .heading {
        flex-wrap: wrap;
    }

    .details {
        margin-top: 2rem;
    }

    .blogImage {
        width: 75%;
    }
}
</style>
