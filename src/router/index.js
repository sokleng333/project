import {createRouter,createWebHistory} from 'vue-router'
import Table from '../components/Table.vue'
import Dashboard from '../components/Dashboard.vue'

const routes=[
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

