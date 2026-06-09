<template>
  <nav class="fixed top-0 left-0 w-full z-50 shadow bg-amber-500 p-4 flex justify-between text-white">
    <div class="md:hidden text-xl cursor-pointer" @click="toggleMenu">
      <i class="fa-solid" :class="isOpen ? 'fa-xmark' : 'fa-bars'"></i>
    </div>
    
    <h1 class="text-2xl font-bold text-white">Food Order</h1>
    
    <div class="md:flex gap-4 hidden text-lg px-6 items-center" >
      <RouterLink to="/" class="hover:text-amber-200" active-class="text-amber-300 underline">Menu</RouterLink>
      <RouterLink to="/cart" class="hover:text-amber-200" active-class="text-amber-300 underline">Cart</RouterLink>
      <RouterLink to="/orders" class="hover:text-amber-200" active-class="text-amber-300 underline">Orders</RouterLink>
    </div>
    
    <div class="text-xl">
      <i class="fa-solid fa-user"></i>
    </div>
  </nav>

  <div class="h-16"></div>

  <div 
    v-if="isOpen" 
    class="fixed top-16 left-0 z-40 md:hidden bg-amber-600 text-white flex flex-col gap-4 p-4 shadow-lg w-[40%] rounded-br-xl"
  >
    <RouterLink to="/" @click="toggleMenu" class="hover:bg-amber-700 p-2 rounded" active-class="text-amber-300 underline">Menu</RouterLink>
    <RouterLink to="/cart" @click="toggleMenu" class="hover:bg-amber-700 p-2 rounded" active-class="text-amber-300 underline">Cart</RouterLink>
    <RouterLink to="/orders" @click="toggleMenu" class="hover:bg-amber-700 p-2 rounded" active-class="text-amber-300 underline">Orders</RouterLink>
    <hr class="h-1 bg-zinc-500 border border-zinc-300 rounded-4xl">
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script> 