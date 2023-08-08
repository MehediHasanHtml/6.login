// define our router
import { createRouter, createWebHistory } from "vue-router";
import login from '../components/login.vue'
import register from '../components/registation.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),

    routes: [{
        path: "/",
        name: "login",
        component: login
    }, {
        path: "/home",
        redirect: "/"
    }, {
        path: "/register",
        name: "register",
        component: register
    }, ]

})

export default router