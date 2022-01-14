import {createRouter, createWebHistory, RouterView} from 'vue-router';

import {store} from "@/store";
import guest from '../middlewere/guest'
import auth from '../middlewere/auth'
import middlewarePipeline from '../middlewere/index'

interface RoutesType {
    path: string;
    name: string;
    component: any;
    meta?: {
        middleware?: any;
        layout?: string;
    };
    children?: RoutesType[];
}

const routes: RoutesType[] = [
    {
        path: '',
        name: 'home',
        component: () => import('../pages/Home.vue'),
        meta: {
            layout: 'AuthLayout'
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../pages/NotFound.vue'),
    },
    {
        path: '/auth/',
        name: 'auth',
        component: RouterView,
        children: [
           {
                path: 'login',
                name: 'login',
                component: () => import('../components/auth/Login.vue'),
                meta: {
                    middleware: [guest],
                    layout: 'AuthLayout'
                },
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../components/auth/Register.vue'),
                meta: {
                    middleware: [guest],
                    layout: 'AuthLayout'
                },
            } ,
            {
                path: 'forgot-password',
                name: 'forgotPassword',
                component: () => import('../components/auth/ForgotPassword.vue'),
                meta: {
                    middleware: [guest],
                    layout: 'AuthLayout'
                },
            }
        ]
    },
    {
        path: '/user/',
        name: 'user',
        component: () => import('../pages/user/Dashboard.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware: any = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }
    console.log(middleware, ' context[0]')

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

export default router