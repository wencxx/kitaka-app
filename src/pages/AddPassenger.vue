<template>
    <div class="p-10 space-y-7 h-[92dvh] overflow-y-auto">
        <h1 class="text-lg font-medium tracking-wide flex items-center gap-x-2">
            <Icon icon="mingcute:user-add-fill" width="24" height="24" />
            <span>Passenger Registration</span>
        </h1>
        <p v-if="added" class="bg-green-500 text-white pl-2 rounded py-1">Added passenger successfully.</p>
        <form @submit.prevent="addPassenger" class="space-y-3">
            <h1 class="text-center mb-5 text-lg rounded-full bg-black text-white py-1">Passenger Information</h1>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Fullname:</label>
                <input type="text" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter full name" v-model="passengerDetails.fullName">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Age:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter age" v-model="passengerDetails.age">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Gender:</label>
                <select class="border rounded pl-2 h-8 w-3/5" v-model="passengerDetails.gender">
                    <option value="" disabled>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Contact:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter contact number" v-model="passengerDetails.contact">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Address:</label>
                <input type="text" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter address" v-model="passengerDetails.address">
            </div>
            <div class="space-x-2 flex">
                <label class="text-lg">Identification:</label>
                <input type="checkbox" class="rounded pl-2 h-8 aspect-square" placeholder="Enter address" v-model="passengerDetails.identification">
            </div>
            <h1 class="text-center !my-5 text-lg rounded-full bg-black text-white py-1">Transport/Voyage Details</h1>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Ship Name:</label>
                <input type="text" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter ship name" v-model="passengerDetails.shipName">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Route:</label>
                <div class="w-3/5 flex gap-x-1">
                    <select class="border rounded pl-2 h-8 w-1/2" v-model="passengerDetails.routeFrom">
                        <option value="" disabled>Select from destination</option>
                        <option>Bacolod City</option>
                        <option>Cebu City</option>
                    </select>
                    <select class="border rounded pl-2 h-8 w-1/2" v-model="passengerDetails.routeTo">
                        <option value="" disabled>Select to destination</option>
                        <option>Bacolod City</option>
                        <option>Cebu City</option>
                    </select>
                </div>
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Inbound Time:</label>
                <input type="datetime-local" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter inbound time" v-model="passengerDetails.inboundTime">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Outbound Time:</label>
                <input type="datetime-local" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter outbound time" v-model="passengerDetails.outboundTime">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Operator Name:</label>
                <input type="text" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter operator name" v-model="passengerDetails.operatorName">
            </div>
            <div class="space-x-2 flex justify-between">
                <label class="text-lg">Wristband Id:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter wristband id" v-model="passengerDetails.wristbandId">
            </div>
            <button v-if="!isLoading" class="rounded-full bg-green-500 w-full py-1 text-white hover:bg-green-600 !mt-10">Register</button>
            <button v-else class="rounded-full bg-green-500 w-full py-1 text-white hover:bg-green-600 !mt-10 animate-pulse" disabled>Registering</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { connection } from '../connection/connection'


const passengerDetails = ref({
    fullName: '',
    age: '',
    gender: '',
    contact: '',
    address: '',
    identification: '',
    shipName: '',
    routeFrom: '',
    routeTo: '',
    inboundTime: '',
    outboundTime: '',
    operatorName: '',
    wristbandId: '',
})

const isLoading = ref(false)
const added = ref(false)

const addPassenger = async () => {
    try {
        added.value = false
        isLoading.value = true
        const res = await axios.post(`${connection()}add-passenger`, passengerDetails.value)

        passengerDetails.value = {
            fullName: '',
            age: '',
            gender: '',
            contact: '',
            address: '',
            identification: '',
            shipName: '',
            routeFrom: '',
            routeTo: '',
            inboundTime: '',
            outboundTime: '',
            operatorName: '',
            wristbandId: '',
        }
        added.value = true
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false
    }
}
</script>