import { createRouter, createWebHistory } from "vue-router";
import ChooseYourProductThemesVue from '../components/ChooseYourProductThemes.vue';
import TheHomePage from "../components/pages/home/TheHomePage.vue"

const routes = [
    {path: '/', name: 'TheHomePage', component: TheHomePage},
    {path: '/about', name: 'About', component:ChooseYourProductThemesVue},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;