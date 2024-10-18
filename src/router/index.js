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
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import UpdateBookView from '@/views/UpdateBookView.vue'
import DeleteBookView from '@/views/DeleteBookView.vue'
import SearchBookView from '@/views/SearchBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'

const {
    isAuthenticated
} = useAuth();

const routes = [{
        path: '/GetAllBookAPI',
        name: 'GetAllBookAPI',
        component: GetAllBookAPI
    },
    {
        path: '/CountBookAPI',
        name: 'CountBookAPI',
        component: CountBookAPI
    },
    {
        path: '/WeatherCheck',
        name: 'WeatherCheck',
        component: WeatherView
    },
    {
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
    },
    {
        path: '/FireLogin',
        name: 'FireLogin',
        component: FirebaseSigninView
    },
    {
        path: '/FireRegister',
        name: 'FireRegister',
        component: FirebaseRegisterView
    },
    {
        path: '/addbook',
        name: 'AddBook',
        component: AddBookView
    },
    {
        path: '/updatebook',
        name: 'UpdateBook',
        component: UpdateBookView
    },
    {
        path: '/deletebook',
        name: 'DeleteBook',
        component: DeleteBookView
    },
    {
        path: '/searchbook',
        name: 'SearchBook',
        component: SearchBookView
    },
    {
        path: '/GetBookCount',
        name: 'GetBookCount',
        component: GetBookCountView
    }
]


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name === 'About' && !isAuthenticated.value) {
        console.log("Access denied: Not authenticated");
        // console.log("isAuthenticated.value:", isAuthenticated.value);
        next();
    } else {
        console.log("Access success!");
        // console.log("isAuthenticated.value:", isAuthenticated.value);
        next();
    }
});


export default router