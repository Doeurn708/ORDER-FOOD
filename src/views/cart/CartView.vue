<template>
    <div class="w-[90%] mx-auto py-8">
        <h1 class="text-3xl font-bold mb-6">
            Shopping Cart
        </h1>

        <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="border p-4 rounded-lg mb-4 flex gap-4"
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

                <div class="mt-2 flex gap-2">
                    <button
                        @click="cartStore.changeQuantity(item.id,-1)"
                    >
                        -
                    </button>

                    <span>
                        {{ item.quantity }}
                    </span>

                    <button
                        @click="cartStore.changeQuantity(item.id,1)"
                    >
                        +
                    </button>
                </div>
            </div>

            <button
                @click="cartStore.removeItem(item.id)"
                class="text-red-500"
            >
                Delete
            </button>
        </div>

        <div class="text-right text-2xl font-bold">
            Total:
            ${{ cartStore.totalPrice.toFixed(2) }}
        </div>
        <div class="text-right mt-4">
            <button
                @click="placeOrder"
                class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
                Place Order
            </button>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore();

const placeOrder = () => {
    if (cartStore.items.length === 0) {
        alert('Your cart is empty!')
        return
    }

    alert('Order placed successfully!')
    cartStore.clearCart()
    router.push('/')
}

</script>