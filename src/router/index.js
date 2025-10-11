import PortfolioPage from "@/components/PortfolioPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Portfolio",
        component: PortfolioPage,
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;