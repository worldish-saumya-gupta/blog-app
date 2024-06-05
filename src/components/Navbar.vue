<template>
<nav>
    <div class="links">
        <router-link to="/">
            <p>Home</p>
        </router-link>
        <router-link to="/" v-if="getIsLogin" @click="logout">
            <p>Logout</p>
        </router-link>
        <router-link to="/login" v-else>
            <p>Login</p>
        </router-link>
    </div>
    <div>
        <button @click="showPopup" v-if="getIsLogin" style="border: none; background: #5bb9eb;">
            <p>{{ firstName }} {{ lastName }}</p>
        </button>
    </div>
</nav>
<div class="popup">
    <AuthorPopUp v-if="getIsPopupVisible && getIsLogin" :authorDetails="authorDetails" />
</div>
</template>

<script>
import AuthorPopUp from './AuthorPopUp.vue';

export default {
    name: 'Navbar',
    components: {
        AuthorPopUp
    },
    data() {
        return {
            authorDetails: null,
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            image: '',
            blogs: []
        }
    },

    computed: {

        getIsLogin() {
            return this.$store.getters.getIsLogin
        },
        getIsPopupVisible() {
            return this.$store.getters.getIsPopupVisible;
        },

        getArticle() {
            return this.$store.getters.getArticles;
        },

    },
    created() {
        if (this.getIsLogin) {
            this.getUserData()
        }
    },

    methods: {
        logout() {
            const logout = confirm("Are you sure to Logout?")
            if (logout) {
                localStorage.clear();
                this.$store.commit('LOGOUT');
            }
        },

        //get data from local storage
        getUserData() {
            const userData = localStorage.getItem('authorData');
            if (userData) {
                const data = JSON.parse(userData);
                this.authorDetails = {
                    id: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    city: data.city,
                    image: data.image,
                    blogs: data.blogs,
                }

                this.firstName = this.authorDetails.firstName;
                this.lastName = this.authorDetails.lastName;

            } else {
                console.log("user not found")
            }
        },
        showPopup() {
            this.$store.commit('AUTHOR_POPUP', true)
        }

    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    height: 3rem;
    background: #5bb9eb;
    justify-content: start;
    padding-top: 1rem;
    width: 100vw;
}

nav p {
    color: white;
    margin-left: 2rem;
    margin-right: 2rem;
    font-weight: 700;
    font-size: large;
}

a {
    text-decoration: none;
}
</style>
<style scoped>
nav {
    display: flex;
    justify-content: start;
    height: 3rem;
    background: #5bb9eb;
    padding-top: 1rem;
    width: 100vw;
}

nav p {
    color: white;
    margin-left: 2rem;
    margin-right: 2rem;
    font-weight: 700;
    font-size: large;
}

a {
    text-decoration: none;
}

.links {
    display: flex;
    justify-content: space-between;
}

.popup {
    display: flex;
    justify-content: center;
    margin: 0 1rem;
}
</style>
