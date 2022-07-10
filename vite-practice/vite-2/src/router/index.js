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
        component: () => import('@/views/Service.vue'),
        children: [
            {
                path: 'first',
                name: 'service.first',
                component: ()=>import('@/views/ServiceFirst.vue')
            },
            {
                path: 'second',
                name: 'service.second',
                component: ()=>import('@/views/ServiceSecond.vue')
            },
            {
                path: 'third',
                name: 'service.third',
                component: ()=>import('@/views/ServiceThird.vue')
            }
        ]
    },
    {
        path: '/contact',
        name: 'contact',
        // component: Contact
        // component: () => import('./views/Contact.vue')
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ()=>import('@/views/Product.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component : () => import('@/views/404.vue')
    }
    
    
]


const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass: 'nav-active-link'
});

export default router;