<template>
<div>
    <Navbar />
    <div class="grid-container" v-if="!getIsLogin">
        <div class="grid-item" v-for="article in getSampleArticles" :key="article.articleId">
            <img v-if="article.blogImage" :src="article.blogImage" class="blogImg">
            <!-- <h2>{{ shortArticle(article.title) }}</h2> -->
            <h2>{{ article.title }}</h2>
            <p class="desc">{{shortArticle(article.description )}}...</p>
            <div class="d-flex">
                <div class="d-col">
                    <p>By <strong>{{ article.author }}</strong></p>
                    <p>Published On <strong>{{ article.date }}</strong></p>
                </div>
                <button>
                    <router-link :to="{ name: 'ViewBlog', params: { id: article.articleId }}" class="btn-primary">Read</router-link>
                </button>
            </div>
        </div>
    </div>
    <div class="grid-container" v-else>
        <div class="grid-item" v-for="article in articleArray" :key="article.articleId">
            <img v-if="article.blogImage" :src="article.blogImage" class="blogImg">
            <h2>{{ article.title }}</h2>
            <p class="desc">{{shortArticle(article.description )}}...</p>
            <div class="d-flex">
                <div class="d-col">
                    <p>By <strong>{{ article.author }}</strong></p>
                    <p>Published On <strong>{{ article.date }}</strong></p>
                </div>
                <button>
                    <router-link :to="{ name: 'ViewBlog', params: { id: article.articleId }}" class="btn-primary">Read</router-link>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Home',
    data() {
        return {
            articleArray: [],
        }
    },

    created() {
        if (this.getIsLogin) {
            this.getArticlesfromLocalStorage()
        }
    },
    
    components: {
        Navbar
    },  
    computed: { 
        getArticles() {
            return this.$store.getters.getArticles;
        },
        getIsLogin() {
            return this.$store.getters.getIsLogin;
        },
        
        getSampleArticles(){
            return this.$store.getters.getSampleArticles;
        }

    },
    methods: {
        shortArticle(content) {
            if (typeof content === 'string') {
                let words = content.split(" ");
                let firstTwenty = words.slice(0, 20);
                return firstTwenty.join(" ");
            }
        },
        shortTitle(content) {
            if (typeof content === 'string') {
                let words = content.split(" ");
                let firstTwenty = words.slice(0, 5);
                return firstTwenty.join(" ");
            }
        },

        getArticlesfromLocalStorage() {
            const getArticle = localStorage.getItem("articleData");
            if (getArticle) {
                const data = JSON.parse(getArticle);
                // console.log(typeof data)
                for (let key in data) {
                    let element = data[key]                    
                    for(let i in element){
                        // console.log(i, element[i]['title'])
                        this.articleArray.push(element[i])
                    }
                }
                // console.log(this.articleArray)
            }
        },

    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 1rem;
}

.grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem 2rem;
    margin: 0.5rem 1rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 20rem !important;
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
    margin-top: 0.5rem;
}

.d-flex {
    display: flex;
    justify-content: space-between;
}

.desc {
    margin: 2rem auto;
    color: gray
}

a {
    text-decoration: none;
}

button {
    border: none;
    background: white;
}

.blogImg {
    height: 200px;
    width: 100%
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .grid-container {
        grid-template-columns: auto auto;
    }
}

@media only screen and (max-width: 600px) {
    .grid-container {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
