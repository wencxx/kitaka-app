<template>
  <div>
    <div class="flex px-10 items-center h-full justify-between">
      <h1 class="tracking-wide text-lg z-[1600]">kitaka</h1>
      <Icon v-if="!toggledSidebar" icon="entypo:menu" class="text-3xl" @click="toggledSidebar = !toggledSidebar" />
      <Icon v-else icon="ic:round-close" class="text-3xl" @click="toggledSidebar = !toggledSidebar" />
    </div>
    <nav class="h-screen w-0 bg-white border-r fixed top-0 left-0 duration-300 pt-[7dvh] overflow-hidden z-[1500]" :class="{ '!w-3/5':  toggledSidebar }">
        <div class="py-5 space-y-3">
          <p class="text-gray-600 px-5">menu</p>
          <ul>
            <li class="space-y-1">
              <router-link :to="{ name: 'passengersLists' }" class="flex items-center gap-x-2 px-5 py-2 hover:bg-black/10">
                <Icon icon="mdi:user" class="text-2xl" />
                <span>Passenger Lists</span>
              </router-link>
              <router-link :to="{ name: 'addPassenger' }" class="flex items-center gap-x-2 px-5 py-2 hover:bg-black/10">
                <Icon icon="mdi:user-add" class="text-2xl" />
                <span>Add Passenger</span>
              </router-link>
              <router-link :to="{ name: 'map' }" class="flex items-center gap-x-2 px-5 py-2 hover:bg-black/10">
                <Icon icon="bxs:map" class="text-2xl" />
                <span>Map</span>
              </router-link>
              <router-link :to="{ name: 'alerts' }" class="flex items-center gap-x-2 px-5 py-2 hover:bg-black/10">
                <Icon icon="entypo:message" class="text-2xl" />
                <span>Alert Notifications</span>
              </router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const toggledSidebar = ref(false)

watch(() => route.path, (newVal) => {
  if(newVal) {
    toggledSidebar.value = false
  }
})
</script>

<style scoped>
.router-link-active { 
  background-color:  rgb(0 0 0 / 0.1);
}
</style>