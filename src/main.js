import 'bootstrap/dist/css/bootstrap.min.css'

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxZVpqrToLWMsJuSV5gZfz5wZGwvUXUDc",
    authDomain: "week7-zhentao.firebaseapp.com",
    projectId: "week7-zhentao",
    storageBucket: "week7-zhentao.appspot.com",
    messagingSenderId: "705206042163",
    appId: "1:705206042163:web:a90b2d600df15c0f0b2d46"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create Vue app instance
const vueApp = createApp(App)

vueApp.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
vueApp.use(router)

vueApp.mount('#app')