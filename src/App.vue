<template>
  <div class="font-Roboto-mono ">
    <Header class="h-[8dvh] shadow" />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>