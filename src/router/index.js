import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import AddBlog from '../views/AddBlog.vue'
import ViewBlog from '../views/ViewBlog.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true

  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
    props: true,
  },
  {
    path: '/Login/:id',
    name: 'Login',
    component: Login,
    props: true,

  },
  {
    path: '/AddBlog/:id',
    name: 'AddBlog',
    component: AddBlog,
    props: true,
    beforeEnter: (to,from ,next)=>{
      if(store.getters.getIsLogin){
        next();
      }else{
        next('/Login')
      }
    }

  },
  {
    path: '/blog/:id',
    name: 'ViewBlog',
    component: ViewBlog,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
