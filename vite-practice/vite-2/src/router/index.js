import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // component: About
        // component: () => import('./views/About.vue')
        component: () => import('@/views/About.vue')
    },
    {
        path: '/service',
        name: 'service',
        // component: Service
        // component: () => import('./views/Service.vue')
        component: () => import('@/views/Service.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        // component: Contact
        // component: () => import('./views/Contact.vue')
        component: () => import('@/views/Contact.vue')
    },{
        path: '/product/:id',
        name: 'product',
        component: ()=>import('@/views/Product.vue')
    }
    
]


const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass: 'nav-active-link'
});

export default router;