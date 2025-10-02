import {createRouter,createWebHistory} from 'vue-router'
import Table from '../components/Table.vue'
import Dashboard from '../components/Dashboard.vue'
// 
import FeaturePage from '../components/Pages/FeaturePage.vue'
import LandingPage from '../components/Pages/LandingPage.vue'
import AboutUs from '../components/Pages/AboutUs.vue'
import ContactPage from "../components/Pages/ContactPage.vue";

const routes=[
    // {
    //     path:'/',
    //     name:"Landingpage",
    //     component:LandingPage,
    //     // name component
    // },
    // {
    //     path:'/Feature',//this is where route to name
    //     name:"Feature",
    //     component:FeaturePage,
    // },
    //  {
    //     path:'/about',//this is where route to name
    //     name:"About",
    //     component:AboutUs,
    // },
    // {
    //     path:'/contact',
    //     name:"Contact",
    //     component:ContactPage
    // },
    

    
    {
        path:'/',
        name:"Dashboard",
        component:Dashboard,
    },
    {
        path:'/table',
        name:'table',
        component:Table,

    }
]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router

