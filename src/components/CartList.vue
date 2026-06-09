<template>
  <div class="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto border border-gray-100">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      <i class="fa-solid fa-basket-shopping text-amber-500"></i>
      Your Cart Detail
    </h2>

    <div v-if="cartItems.length === 0" class="text-center py-12 text-gray-400">
      <i class="fa-solid fa-bowl-food text-5xl mb-3 block text-gray-300"></i>
      <p>Your cart is empty. Start adding some delicious food!</p>
    </div>

    <div v-else class="space-y-4">
      <div 
        v-for="item in cartItems" 
        :key="item.id" 
        class="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
      >
        <div class="flex items-center gap-4">
          <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
          <div>
            <h4 class="font-bold text-gray-800">{{ item.name }}</h4>
            <p class="text-amber-600 font-semibold text-sm">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button 
            @click="$emit('decrease-qty', item.id)"
            class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition-colors"
          >
            -
          </button>
          <span class="font-bold text-gray-800 w-6 text-center">{{ item.quantity }}</span>
          <button 
            @click="$emit('increase-qty', item.id)"
            class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition-colors"
          >
            +
          </button>

          <button 
            @click="$emit('remove-item', item.id)"
            class="ml-2 text-red-400 hover:text-red-600 p-2 transition-colors"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t-2 border-dashed border-gray-100 flex justify-between items-center">
        <span class="text-lg font-bold text-gray-600">Total Price:</span>
        <span class="text-2xl font-black text-amber-600">${{ cartTotal.toFixed(2) }}</span>
      </div>

      <button class="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl shadow-md transition-colors">
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cartItems: {
    type: Array,
    required: true
  },
  cartTotal: {
    type: Number,
    required: true
  }
})

defineEmits(['increase-qty', 'decrease-qty', 'remove-item'])
</script>