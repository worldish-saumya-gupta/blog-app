<template>
    <Navbar />
    <div class="login-frm">
        <div class="popup-form">
            <AuthorPopUp v-if="getIsPopupVisible && getIsLogin" :authorDetails="authorDetails" />
        </div>
        <div class="container" v-if="!getIsLogin">
            <div class="login-form">
                <div class="logo">
                    <img src="../assets/logo.jpeg">
                </div>
                <form @submit.prevent="Login">
                    <div class="form-element">
                        <label>First Name</label>
                        <input type="text" v-model="firstName" required>
                    </div>
                    <div class="form-element">
                        <label>Last Name</label>
                        <input type="text" v-model="lastName" required>
                    </div>
                    <div class="form-element">
                        <label>Email</label>
                        <input type="email" v-model="email" required>
                    </div>
                    <div class="form-element">
                        <label>Password</label>
                        <input type="password" v-model="password" required>
                    </div>
                    <div class="form-element">
                        <label>City</label>
                        <input type="text" v-model="city" required>
                    </div>
                    <div class="form-element">
                        <label>Upload Image</label>
                        <input type="file" accept="image/*" @change="handleUploadImage" required>
                    </div>
    
                    <div class="form-element">
                        <button type="submit">Login</button>
                    </div>
    
                </form>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import Navbar from '../components/Navbar.vue'
    import AuthorPopUp from '../components/AuthorPopUp.vue'
    export default {
        components: {
            Navbar,
            AuthorPopUp
        },
        data() {
            return {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                city: '',
                image: '',
                blogs:[],
                authorDetails: null
            }
        },
    
        computed: {
            getIsLogin() {
                return this.$store.getters.getIsLogin
            },
            getIsPopupVisible(){
                return this.$store.getters.getIsPopupVisible;
            }
        },
    
        methods: {
    
            Login() {
                this.$store.commit('AUTHOR_POPUP',true)
                this.authorDetails = {
                    id: this.generateId(),
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    city: this.city,
                    image: this.image,
                    blogs:[],
                };
                
                //store author data to vuex store
                this.$store.commit('ADD_AUTHOR', this.authorDetails);
    
                //store author data to local storage
                this.saveLocal();
    
            },
            saveLocal(){
                let authorString = JSON.stringify(this.authorDetails)
                localStorage.setItem("authorData",authorString)
            },
    
            generateId() {
                return Date.now()
            },
    
            handleUploadImage(event) {
                const file = event.target.files[0];
                // console.log(file)
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.image = reader.result
                }
            }
        },
        
    }
    </script>
    
    <style scoped>
    .login-frm {
        background: url('../assets/Background-web-size.png');
        display: flex;
        flex-direction: column;
        align-items: center;
        background-size: cover;
        height: 100vh;
    }
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 20px;
    }
    
    .login-form img {
        height: 5rem;
        width: 5rem;
        margin-top: 2rem;
    }
    
    .login-form form {
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
        padding: 20px 30px;
        border: none;
        color: #fff;
        border-radius: 30px;
        font-weight: 500;
        font-size: 16px;
        box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
        height: auto;
        align-items: center;
    }
    
    form input {
        width: 15rem;
        padding: 0.5rem 0.5rem;
        border-radius: 10px;
        border: 0.5px solid gray;
        box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
    }
    .popup-form{
        display: flex;
        justify-content: center;
        margin-top:3rem;
    }
    
    @media only screen and (max-width: 600px) {
      .popup-form {
        flex-wrap: wrap;
      }
    }
    </style>
    