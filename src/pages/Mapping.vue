<template>
    <div class="w-screen h-[92dvh]">
        <l-map class="!w-full !h-full" ref="map" v-model:zoom="zoom" :center="[10.6767, 122.9509]" >
            <l-tile-layer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker v-for="passenger in passengers" :key="passenger.name" :lat-lng="[passenger.lat,  passenger.lng]">
                <l-popup>
                    <div>
                        <h3><span class="font-bold">Name:</span> {{ passenger.name }}</h3>
                        <h3><span class="font-bold">Gender:</span> {{ passenger.gender }}</h3>
                        <h3><span class="font-bold">Age:</span> {{ passenger.age }}</h3>
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet'


const zoom = ref(13)


const passengers = ref([
    {
        lat: '10.623876',
        lng: '122.9509',
        name: 'Jerry Abeniso',
        gender: 'Male',
        age: '23 yrs old',
    },
    {
        lat: '10.678056',
        lng: '122.951944',
        name: 'Maria Santos',
        gender: 'Female',
        age: '30 yrs old',
    },
    {
        lat: '10.752215',
        lng: '122.994335',
        name: 'Jose Cruz',
        gender: 'Male',
        age: '45 yrs old',
    },
    {
        lat: '10.776212',
        lng: '122.978502',
        name: 'Anna Lopez',
        gender: 'Female',
        age: '28 yrs old',
    },
    {
        lat: '10.640739',
        lng: '122.978206',
        name: 'Pedro Garcia',
        gender: 'Male',
        age: '36 yrs old',
    },
    {
        lat: '10.680056',
        lng: '123.014444',
        name: 'Luisa Mendoza',
        gender: 'Female',
        age: '24 yrs old',
    },
    {
        lat: '10.708429',
        lng: '122.963291',
        name: 'Ramon Dela Cruz',
        gender: 'Male',
        age: '50 yrs old',
    },
    {
        lat: '10.728502',
        lng: '123.001584',
        name: 'Isabel Reyes',
        gender: 'Female',
        age: '29 yrs old',
    },
    {
        lat: '10.694412',
        lng: '122.947874',
        name: 'Carlos Villanueva',
        gender: 'Male',
        age: '41 yrs old',
    },
    {
        lat: '10.746738',
        lng: '122.936498',
        name: 'Sofia Flores',
        gender: 'Female',
        age: '33 yrs old',
    },
]);

</script>