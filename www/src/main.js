import {createApp} from 'vue'
import App from './App.vue'


import {createRouter, createWebHistory} from 'vue-router'  ;
import Home from './page/home.vue'
import About from './page/about.vue'
import Contact from './page/contact.vue'




const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const VueApp = createApp(App)

VueApp.use(router)
VueApp.mount('#app')
