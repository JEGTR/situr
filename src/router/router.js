import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
        path: '/',
        component: () => import( /* webpackChunkName: "PlacesPage" */ "@/modules/situr/pages/HomePage") 
    },
    { 
        path: '/lugares',
        component: () => import( /* webpackChunkName: "PlacesPage" */ "@/modules/places/pages/PlacesPage")
    },
    { 
        path: '/actividades',
        component: () => import( /* webpackChunkName: "ActivitiesPage" */ "@/modules/activities/ActivitiesPage")
    },
    { 
        path: '/directorio',
        component: () => import( /* webpackChunkName: "ActivitiesPage" */ "@/modules/directory/DirectoryPage.vue")
    },
    { 
        path: '/:pathMatch(.*)*',
        component: () => import( /* webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router