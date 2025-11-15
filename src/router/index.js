import PortfolioPage from "@/components/PortfolioPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/mvh",
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
    history: createWebHashHistory(),
    routes: routes
})

export default router;