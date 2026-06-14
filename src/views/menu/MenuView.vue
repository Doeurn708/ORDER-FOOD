<template>
  <div class="min-h-screen bg-gray-50">
    <SlideBar />

    <!-- MAIN CONTAINER -->
    <div class="px-4 sm:px-6 lg:px-8 w-full m-16 max-w-7xl mx-auto">
      <div class="p-8 w-[90%] m-auto">
        
        <!-- HEADER -->
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 border-b border-gray-200 pb-4">
          <h1 class="text-2xl sm:text-3xl text-sky-500 font-black">
            Food Ordering Panel
          </h1>

          <button
            @click="router.push('/cart')"
            class="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow flex items-center gap-2 transition-all active:scale-95 text-sm sm:text-base"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Cart ({{ cartStore.totalItemsCount }})</span>
          </button>
        </div>

        <!-- SEARCH + CATEGORY -->
        <div class="mb-8 space-y-5">
          <!-- SEARCH -->
          <div class="relative max-w-md">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search dishes..."
              class="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500 shadow-sm"
            />
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-[70%] -translate-y-1/2 text-gray-400"></i>
          </div>

          <!-- CATEGORY -->
          <div class="flex flex-wrap gap-2 overflow-x-auto pb-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all',
                selectedCategory === category
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- FOOD GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FoodCard
            v-for="dish in filteredFood"
            :key="dish.id"
            v-bind="dish"
            @add-to-cart="handleAddToCart"
          />
        </div>

        <!-- EMPTY STATE -->
        <div v-if="filteredFood.length === 0" class="text-center py-20">
          <i class="fa-solid fa-magnifying-glass text-5xl text-gray-300 mb-4"></i>
          <p class="text-gray-500 text-lg">No dishes found matching your search.</p>
        </div>

      </div>
    </div>

    <div
      v-if="showCart"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end"
      @click.self="showCart = false"
    >
      <div class="bg-white w-full sm:max-w-md h-full shadow-2xl flex flex-col overflow-hidden animate-slide-in">
        <!-- HEADER -->
        <div class="flex justify-between items-center p-6 border-b">
          <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <i class="fa-solid fa-basket-shopping text-amber-500"></i>
            Your Basket
          </h2>
          <button @click="showCart = false" class="text-3xl text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <!-- EMPTY CART -->
        <div v-if="cartStore.cart.length === 0" class="flex-1 flex flex-col justify-center items-center text-center p-8">
          <i class="fa-solid fa-bowl-food text-6xl mb-4 text-gray-200"></i>
          <p class="text-gray-400 text-lg">Your cart is empty</p>
        </div>

        <!-- CART ITEMS -->
        <div v-else class="flex-1 overflow-y-auto p-6 space-y-5">
          <div
            v-for="item in cartStore.cart"
            :key="item.id"
            class="flex gap-4 border border-gray-100 rounded-2xl p-4"
          >
            <img :src="item.image" :alt="item.name" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl" />
            <div class="flex-1">
              <h4 class="font-bold">{{ item.name }}</h4>
              <p class="text-amber-600 font-semibold">${ {{ item.price.toFixed(2) }} }</p>
              <div class="flex items-center gap-3 mt-3">
                <button @click="cartStore.changeQuantity(item.id, -1)" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-xl">-</button>
                <span class="font-bold w-6 text-center">{{ item.quantity }}</span>
                <button @click="cartStore.changeQuantity(item.id, 1)" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-xl">+</button>
              </div>
            </div>
            <button @click="cartStore.removeItem(item.id)" class="text-red-500 hover:text-red-600">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <!-- TOTAL -->
        <div v-if="cartStore.cart.length > 0" class="p-6 border-t bg-white">
          <div class="flex justify-between text-xl mb-5">
            <span class="font-medium text-gray-600">Total Bill</span>
            <span class="font-black text-amber-600">${ {{ cartStore.totalPrice.toFixed(2) }} }</span>
          </div>
          <button class="w-full bg-amber-500 hover:bg-amber-600 py-4 rounded-2xl text-white font-bold text-lg shadow">
            Place Order
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import FoodCard from '@/components/FoodCard.vue'
import SlideBar from '@/components/SlideBar.vue'
import Food from '@/data/Food.json'

const cartStore = useCartStore()
const router = useRouter()

const showCart = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('All')

const handleAddToCart = (foodItem) => {
  cartStore.addToCart(foodItem)
}

const categories = computed(() => {
  const cats = new Set((Food || []).map(item => item.category))
  return ['All', ...Array.from(cats)]
})

const filteredFood = computed(() => {
  return (Food || []).filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || dish.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
.animate-slide-in {
  animation: slideIn 0.4s ease-out forwards;
}
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
</style>