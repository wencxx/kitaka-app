<template>
    <div class="p-10 space-y-7 h-[92dvh] overflow-y-auto">
        <h1 class="text-lg font-medium tracking-wide flex items-center gap-x-2">
            <Icon icon="mdi:user" width="24" height="24" />
            <span>Passenger Lists</span>
        </h1>
        <div class="bg-gray-100 rounded shadow p-5 overflow-x-auto">
            <table class="w-[600%]">
                <thead>
                    <tr>
                        <th class="border w-1/12">Wristband Id</th>
                        <th class="border w-1/12">Full Name</th>
                        <th class="border w-1/12">Age</th>
                        <th class="border w-1/12">Gender</th>
                        <th class="border w-1/12">Contact</th>
                        <th class="border w-2/12">Address</th>
                        <th class="border w-1/12">ID</th>
                        <th class="border w-1/12">Ship Name</th>
                        <th class="border w-1/12">Route</th>
                        <th class="border w-1/12">Inbound Time</th>
                        <th class="border w-1/12">Outbound Time</th>
                        <th class="border w-1/12">Operator Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="passenger in passengersLists" :key="passenger.wristbandId">
                        <td class="border text-center py-1">{{ passenger.wristbandId }}</td>
                        <td class="border text-center py-1">{{ passenger.fullName }}</td>
                        <td class="border text-center py-1">{{ passenger.age }}</td>
                        <td class="border text-center py-1">{{ passenger.gender }}</td>
                        <td class="border text-center py-1">{{ passenger.contact }}</td>
                        <td class="border text-center py-1">{{ passenger.address }}</td>
                        <td class="border text-center py-1">{{ passenger.identification }}</td>
                        <td class="border text-center py-1">{{ passenger.shipName }}</td>
                        <td class="border text-center py-1">{{ routeFrom }} - {{ passenger.routeTo }}</td>
                        <td class="border text-center py-1">{{ passenger.inboundTime }}</td>
                        <td class="border text-center py-1">{{ passenger.outboundTime }}</td>
                        <td class="border text-center py-1">{{ passenger.operatorName }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { connection } from '../connection/connection'

onMounted(() => {
    getPassengers()
})

const passengersLists = ref([])

const getPassengers = async () => {
    try {
        const res = await axios.get(`${connection()}get-passengers`)

        passengersLists.value = res.data
    } catch (error) {
        console.log(error)
    }
}
</script>