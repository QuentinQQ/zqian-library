import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import {
    useAuth
} from './authenticate'

const {
    isAuthenticated
} = useAuth();

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
});

router.beforeEach((to, from, next) => {
    if (to.name === 'About' && !isAuthenticated.value) {
        console.log("Access denied: Not authenticated");
        console.log("isAuthenticated.value:", isAuthenticated.value);
        next();
    } else {
        console.log("Access success!");
        console.log("isAuthenticated.value:", isAuthenticated.value);
        next();
    }
});
// router.beforeEach((to, from, next) => {
//     if (to.name === 'About' && !isAuthenticated.value) {
//         console.log("Access denied: Not authenticated");
//         console.log("isAuthenticated.value:", isAuthenticated.value);
//         next({
//             name: 'Login'
//         });
//     } else {
//         console.log("Access success!");
//         console.log("isAuthenticated.value:", isAuthenticated.value);
//         next();
//     }
// });

export default router