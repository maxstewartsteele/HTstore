import Vue from "vue";
import Router from "vue-router";
import VueResource from 'vue-resource';

Vue.use(Router);
Vue.use(VueResource);


export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("./components/Home")
        },
        {
            path: "/music",
            alias: "/music",
            name: "Music",
            component: () => import("./components/Music")
        },
        {
            path: "/store",
            name: "Store",
            component: () => import("./components/Store"),
        },
        {
            path: "/contact",
            name: "Contact",
            component: () => import("./components/Contact"),
        }
    ]
})
;

