import {createRouter,createWebHistory} from 'vue-router'
import Table from '../components/Table.vue'
import Login from '../components/Pages/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import FeaturePage from '../components/Pages/FeaturePage.vue'
import LandingPage from '../components/Pages/LandingPage.vue'
import AboutUs from '../components/Pages/AboutUs.vue'
import ContactPage from "../components/Pages/ContactPage.vue";
import LeaveRequest from '../components/LeaveRequest.vue'

const routes=[
    {
        path:'/',
        name:"Landingpage",
        component:LandingPage,
        // name component
    },
    {
        path:'/Feature',//this is where route to name
        name:"Feature",
        component:FeaturePage,
    },
     {
        path:'/about',//this is where route to name
        name:"About",
        component:AboutUs,
    },
    {
        path:'/contact',
        name:"Contact",
        component:ContactPage
    },
    

    
    {
        path:'/dashboard',
        name:"Dashboard",
        component:Dashboard,
    },
    {
        path:'/table',
        name:'table',
        component:Table,

    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:"/leave",
        name:"leave-request",
        component:LeaveRequest,

    }
]
const router=createRouter({
    history:createWebHistory(),
    routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (to.path === '/dashboard' && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});



export default router

