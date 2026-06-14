<template>
  <!-- Sticky Header -->
  <div
    class="fixed top-0 w-full z-50 backdrop-blur-md bg-amber-500 border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink
        to="/"
        class="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:shadow-md transition-all active:scale-95"
      >
        <ArrowLeft class="w-4 h-4" />
        <span>Back</span>
      </RouterLink>

      <h1 class="text-xl md:text-2xl text-sky-400 font-bold tracking-wide">
        Shopping Cart
      </h1>

      <div
        class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
      >
        <ShoppingCart class="w-5 h-5" />
      </div>
    </div>
  </div>

  <div class="w-[90%] m-auto py-8 items-center grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- LEFT: CART ITEMS -->
    <div class="lg:col-span-3">
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="border p-4 rounded-lg mb-4 flex gap-4 items-center bg-white shadow-sm"
      >
        <img :src="item.image" class="w-24 h-24 object-cover rounded" />

        <div class="flex-1">
          <h3 class="font-bold">{{ item.name }}</h3>
          <p class="text-gray-600">${{ item.price }}</p>

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

      <div
        v-if="!cartStore.items || cartStore.items.length === 0"
        class="text-center py-12 text-gray-400"
      >
        Your cart is empty.
      </div>
    </div>
   

    <!-- RIGHT: CHECKOUT FORM -->
    <!-- <div class="bg-white rounded-xl shadow p-6 h-fit">
      <h2 class="text-lg font-bold mb-4">Customer Information</h2>

      <div class="space-y-3">
        <input v-model="form.name" placeholder="Full Name" class="input" />
        <input v-model="form.phone" placeholder="Phone Number" class="input" />
        <input v-model="form.email" placeholder="Email Address" class="input" />
        <input v-model="form.telegram" placeholder="Telegram Username" class="input" />
        <input v-model="form.address" placeholder="Delivery Address" class="input" />
      </div> -->

      <!-- SUMMARY -->
      <!-- <div class="mt-6 border-t pt-4">
        <p class="text-xl font-bold">
          Total:
          {{ cartStore.totalPrice ? cartStore.totalPrice.toFixed(2) : "0.00" }}
        </p>

        <button
          @click="placeOrder"
          class="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Place Order
        </button>
      </div>
    </div> -->
    <h1 class="text-center font-bold text-2xl text-sky-400">Order Now</h1> 
    <div class="m-auto w-full flex justify-center lg:ml-[110%]">    
         <RouterLink to="/login" class="w-fit bg-amber-500 h-fit p-2 text-white rounded-xl hover:bg-transparent hover:border hover:text-black duration-700 hover:scale-95 hover:shadow-2xl">Place order</RouterLink>     
     </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import Swal from "sweetalert2";
import { ArrowLeft, ShoppingCart } from "lucide-vue-next";

const router = useRouter();
const cartStore = useCartStore();

/* FORM */
const form = reactive({
  name: "",
  phone: "",
  email: "",
  telegram: "",
  address: "",
});

/* ORDER */
const placeOrder = () => {
  const cartItems = cartStore.items || [];

  if (cartItems.length === 0) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Your cart is empty!",
    });
    return;
  }

  // Validation
  if (!form.name || !form.phone || !form.email || !form.telegram || !form.address) {
    Swal.fire({
      icon: "warning",
      title: "Missing Information",
      text: "Please fill in all fields before placing order.",
    });
    return;
  }

  Swal.fire({
    title: "Processing Order...",
    text: "Please wait a moment.",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  setTimeout(() => {
    const orderData = {
      id: Date.now(),
      orderNumber: `ORD-${Date.now()}`,
      customer: { ...form },
      items: [...cartStore.items],
      total: cartStore.totalPrice,
      status: "Out For Delivery",
      estimatedTime: "25 Min",
      rider: "John Smith",
      createdAt: new Date().toLocaleString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    Swal.close();

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      cartStore.clearCart();
      router.push("/orders");
    });
  }, 1500);
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
}

.input:focus {
  border-color: #3b82f6;
}
</style>