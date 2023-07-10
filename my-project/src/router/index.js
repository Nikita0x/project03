import { createRouter, createWebHistory } from "vue-router";
import TheAbout from '../components/pages/about/TheAbout.vue';
import TheHomePage from "../components/pages/home/TheHomePage.vue";
import TheServices from "../components/pages/Services/TheServices.vue";
import OurTeamsPage from "../components/pages/ourTeams/OurTeamsPage.vue"
import ContactUs from "../components/pages/contactUs/ContactUsPage.vue"

const routes = [
    {path: '/', name: 'Home', component: TheHomePage},
    {path: '/about', name: 'About', component:TheAbout},
    {path: '/services', name: 'Services', component:TheServices},
    {path: '/ourteams', name: 'Our Teams', component:OurTeamsPage},
    {path: '/contactus', name: 'Contact Us', component:ContactUs},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;