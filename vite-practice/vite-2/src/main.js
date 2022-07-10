import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Service from './views/Service.vue'
// import Contact from './views/Contact.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // component: About
            component: () => import('./views/About.vue')
        },
        {
            path: '/service',
            name: 'service',
            // component: Service
            component: () => import('./views/Service.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            // component: Contact
            component: () => import('./views/Contact.vue')
        }
        
    ]
});

createApp(App)
.use(router)
.mount('#app')
