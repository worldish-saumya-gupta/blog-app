<template>
<div class="card" v-if="authorDetails">

    <div>
        <h3>Welcome {{ authorDetails.firstName }} {{ authorDetails.lastName }}</h3>
        <img :src="authorDetails.image" style="width: 100px; height: 100px; border-radius: 50%;">
        <h5>Your Email: {{ authorDetails.email }}</h5>
        <h5>Your City: {{ authorDetails.city }}</h5>
        <h5 v-if="authorDetails.blogs.length>0">Your Blogs: </h5>
        <p v-for="(title, i) in authorDetails.blogs" :key="i">{{ title }}</p>
        <br>
        <router-link :to="{ name: 'AddBlog', params:{id:authorDetails.id}}" class="btn-primary" @click="hidePopup">Add Blog</router-link>
    </div>
    <div>
        <button @click="hidePopup" v-if="getIsPopupVisible" class="close">X</button>
    </div>
</div>
</template>

<script>
export default {
    props: ['authorDetails'],
    computed: {
        getIsPopupVisible() {
            return this.$store.getters.getIsPopupVisible;
        }
    },
    methods: {
        hidePopup() {
            this.$store.commit('AUTHOR_POPUP', false)
        },
    }
}
</script>

<style scoped>
.card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 2rem;
    width: 40rem;
    background: white;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
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

a {
    text-decoration: none;
}

.close {
    border: none;
    background: white;
}
</style>
