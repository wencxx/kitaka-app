import { createRouter, createWebHistory } from "vue-router";
import PassengerLists from '../pages/PassengersLists.vue'
import AddPassenger from '../pages/AddPassenger.vue'
import Mapping from '../pages/Mapping.vue'
import Alerts from '../pages/Alerts.vue'

const routes = [
    {
        path: '/',
        name: 'passengersLists',
        component: PassengerLists
    },
    {
        path: '/add-passenger',
        name: 'addPassenger',
        component: AddPassenger
    },
    {
        path: '/map',
        name: 'map',
        component: Mapping
    },
    {
        path: '/alerts',
        name: 'alerts',
        component: Alerts
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router