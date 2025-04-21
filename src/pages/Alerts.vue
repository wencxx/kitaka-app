<template>
    <div class="w-screen h-[92dvh] p-10">
        <div class="space-y-5">
            <button class="bg-blue-500 w-full py-2 rounded-lg text-white" @click="sendMessage">Send Departure Time Message</button>
            <button class="bg-blue-500 w-full py-2 rounded-lg text-white" @click="sendMessage">Send Arrival Time Message</button>
            <button class="bg-blue-500 w-full py-2 rounded-lg text-white" @click="sendMessage">Trigger Emergency Alert</button>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { connection } from '../connection/connection'

const sendMessage = async () => {
    try {
        const res = await axios.post(`${connection()}send-message`, null)
        
        if(res.status === 200){
            console.log(res.data)
        }else{
            console.log(res.data)
        }
    } catch (error) {
        console.log(error)
    }
}
</script>