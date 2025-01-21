<template>
    <div class="w-screen h-[92dvh]">
        <l-map class="!w-full !h-full" ref="map" v-model:zoom="zoom" :center="[10.6767, 122.9509]" >
            <l-tile-layer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker v-for="passenger in passengersLists" :key="passenger.name" :lat-lng="[passenger.latitude,  passenger.longitude]">
                <l-popup>
                    <div>
                        <h3><span class="font-bold">Name:</span> {{ passenger.fulleName }}</h3>
                        <h3><span class="font-bold">Gender:</span> {{ passenger.gender }}</h3>
                        <h3><span class="font-bold">Age:</span> {{ passenger.age }}</h3>
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet'
import axios from "axios";

const zoom = ref(13)
let intervalId = null;
const passengersLists = ref([])

onMounted(() => {
  getPassengers();
  intervalId = setInterval(() => {
    getPassengers();
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});


const getPassengers = async () => {
    try {
        const res = await axios.get('https://inclucity-server.vercel.app/get-passengers')

        passengersLists.value = res.data
    } catch (error) {
        console.log(error)
    }
}
</script>