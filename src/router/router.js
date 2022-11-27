import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "PlacesPage" */ "@/modules/situr/pages/HomePage")
    },
    {
        path: '/lugares',
        name: 'places',
        component: () => import( /* webpackChunkName: "PlacesPage" */ "@/modules/places/pages/PlacesPage")
    },
    {
        path: '/lugares/:id',
        name: 'place-id',
        component: () => import( /* webpackChunkName: "PlacesPage" */ "@/modules/places/pages/PlacePage"),
        props: (route) => {
            const { id } = route.params
            return { id }
        },
        children: [
            {
                path: 'comidas',
                name: 'foods',
                component: () => import( /* webpackChunkName: "FoodsView" */ "@/modules/places/pages/FoodsView"),
            },
            {
                path: 'hospedajes',
                name: 'lodgings',
                component: () => import( /* webpackChunkName: "LodgingsView" */ "@/modules/places/pages/LodgingsView"),
            },
            {
                path: 'planes',
                name: 'plans',
                component: () => import( /* webpackChunkName: "PlansView" */ "@/modules/places/pages/PlansView"),
            },
        ]
    },
    {
        path: '/actividades',
        name: 'activities',
        component: () => import( /* webpackChunkName: "ActivitiesPage" */ "@/modules/activities/ActivitiesPage")
    },
    {
        path: '/directorio',
        name: 'directory',
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
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return { top: 0 }
        }

    }
})

export default router