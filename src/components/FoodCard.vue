<template>
  <div class="max-w-sm rounded-xl h-100 overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <img class="w-full h-[40%] object-cover" :src="image" :alt="name" />
    
    <div class="p-4 h-[60%]">
      <span class="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
        {{ category }}
      </span>

      <h3 class="text-xl font-bold text-gray-900 mb-1 h-[20%]">{{ name }}</h3>
      
      <p class="text-gray-600 mt-3 text-sm mb-4 h-[30%] line-clamp-2">
        {{ description }}
      </p>
      
      <div class="flex items-center justify-between">
        <span class="text-2xl font-black text-amber-600">${{ price.toFixed(2) }}</span>
        
        <button 
          @click="onAddToCart"
          class="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
const props = defineProps({
  id: { type: Number, required: true }, 
  name: { type: String, required: true },
  description: { type: String, default: 'Delicious authentic recipe made with fresh ingredients.' },
  price: { type: Number, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
  category: { type: String, default: 'Main Dish' }
})

const emit = defineEmits(['add-to-cart'])

const onAddToCart = () => {
  emit('add-to-cart', {
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.image
  })
   Swal.fire({
    title: 'Added to Cart!',
    html: `
      <strong>${props.name}</strong><br>
      Price: <strong>$${props.price.toFixed(2)}</strong>
    `,
    icon: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    background: '#fff',
    customClass: {
      popup: 'swal-popup'
    }
  })
}
</script>