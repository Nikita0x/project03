import { createRouter, createWebHistory } from "vue-router";
import TheAbout from '../components/pages/about/TheAbout.vue';
import TheHomePage from "../components/pages/home/TheHomePage.vue"

const routes = [
    {path: '/', name: 'TheHomePage', component: TheHomePage},
    {path: '/about', name: 'About', component:TheAbout},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;