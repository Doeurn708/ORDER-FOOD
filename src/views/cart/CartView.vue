<template>
    <div class="p-2 w-20 mt-2  ">
        <RouterLink class="border  rounded-2xl justify-center flex items-center hover:bg-amber-400 hover:border hover:text-white hover:scale-95 hover:border-amber-600 duration-500 text-black text-sm" to="/">
            <span><i class="fa-solid fa-chevron-left"></i></span>
            Back
        </RouterLink>       
    </div>
   <div class="w-[90%] mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">
      Shopping Cart
    </h1>

    <div
      v-for="item in cartStore.items"
      :key="item.id"
      class="border p-4 rounded-lg mb-4 flex gap-4 items-center"
    >
      <img
        :src="item.image"
        class="w-24 h-24 object-cover rounded"
      />

      <div class="flex-1">
        <h3 class="font-bold">
          {{ item.name }}
        </h3>

        <p>${{ item.price }}</p>

        <div class="mt-2 flex gap-2 items-center">
          <button
            @click="cartStore.changeQuantity(item.id, -1)"
            class="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded font-bold"
          >
            -
          </button>

          <span class="w-8 text-center font-semibold">
            {{ item.quantity }}
          </span>

          <button
            @click="cartStore.changeQuantity(item.id, 1)"
            class="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded font-bold"
          >
            +
          </button>
        </div>
      </div>

      <button
        @click="cartStore.removeItem(item.id)"
        class="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </div>

    <div v-if="!cartStore.items || cartStore.items.length === 0" class="text-center py-12 text-gray-400">
      Your cart is empty.
    </div>

    <div class="text-right text-2xl font-bold mt-6">
      Total: ${{ cartStore.totalPrice ? cartStore.totalPrice.toFixed(2) : '0.00' }}
    </div>
    
    <div class="text-right mt-4">
      <button
        @click="placeOrder"
        class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors active:scale-95"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import Swal from 'sweetalert2'

const router = useRouter()
const cartStore = useCartStore()
const placeOrder = () => {
  const cartItems = cartStore.items || []
  if (cartItems.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Your cart is empty!',
      confirmButtonColor: '#3b82f6',
    })
    return 
  }

  Swal.fire({
    title: 'Processing Order...',
    text: 'Please wait a moment.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading() 
    }
  })

  setTimeout(() => {
    Swal.close()

    Swal.fire({
      icon: 'success',
      title: 'Order Placed!',
      text: 'Your order has been placed successfully.',
      confirmButtonColor: '#3b82f6',
      timer: 2000,
      timerProgressBar: true,
      allowOutsideClick: false
    }).then(() => {
      cartStore.clearCart()
      router.push('/orders')
    })

  }, 2000) 

  cartStore.clearCart()
  
  router.push({
    path: '/orders',
    query: { orderSuccess: 'true' }
  })
}
</script>