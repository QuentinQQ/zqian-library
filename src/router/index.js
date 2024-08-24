import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [{
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router