import { createRouter, createWebHistory } from "vue-router";
import PassengerLists from '../pages/PassengersLists.vue'
import AddPassenger from '../pages/AddPassenger.vue'
import Mapping from '../pages/Mapping.vue'

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
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router