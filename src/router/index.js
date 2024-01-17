import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/inicio/electronicos',
                name: 'electronicos',
                component: () => import('../components/Electronicos.vue')
            },
            {
                path: '/inicio/electronicos/videojuegos',
                name: 'videojuegos',
                component: () => import('../components/Videojuegos.vue')
            },
            {
                path: '/info',
                name: 'info',
                component: () => import('../components/Info.vue')
            },
            {
                path: '/info/cocina',
                name: 'cocina',
                component: () => import('../components/Cocina.vue')
            },
            {
                path: '/info/cocina/estufas',
                name: 'cocina',
                component: () => import('../components/Estufas.vue')
            },
            {
                path: '/categories',
                name: 'categories',
                component: () => import('../components/Categorias.vue')
            },
            {
                path: '/categories/limpieza',
                name: 'limpieza',
                component: () => import('../components/Limpieza.vue')
            },
            {
                path: '/categories/limpieza/detergente',
                name: 'detergente',
                component: () => import('../components/Detergente.vue')
            },
        ]
    },
]

const router = new VueRouter({routes, })
export default router;