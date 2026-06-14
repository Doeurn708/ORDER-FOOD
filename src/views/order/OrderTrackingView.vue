<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Empty State -->
    <div v-if="!order" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <PackageCheck class="w-20 h-20 text-gray-300 mx-auto mb-4" />

        <h2 class="text-3xl font-bold text-gray-600">No Order Found</h2>

        <p class="text-gray-400 mt-2">Please place an order first.</p>

        <RouterLink
          to="/"
          class="inline-block mt-5 bg-amber-500 text-white px-6 py-3 rounded-xl hover:bg-amber-600"
        >
          Go To Menu
        </RouterLink>
      </div>
    </div>

    <!-- ORDER VIEW -->
    <div v-else class="min-h-screen">
      <!-- Header -->
      <div
        class="fixed w-full top-0 z-50 backdrop-blur-md bg-amber-500 border-b border-gray-200"
      >
        <div
          class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        >
          <RouterLink
            to="/"
            class="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:shadow-md transition-all"
          >
            <ArrowLeft class="w-4 h-4" />
            <span>Back</span>
          </RouterLink>

          <h1 class="text-xl md:text-2xl text-sky-500 font-bold tracking-wide">
            Order Tracking
          </h1>

          <div
            class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
          >
            <PackageCheck class="w-5 h-5" />
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto p-6">
        <!-- Success Card -->
        <div class="bg-white rounded-3xl shadow-lg p-8 mb-8 text-center">
          <div
            class="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4"
          >
            <CheckCircle2 class="w-12 h-12 text-green-500" />
          </div>

          <h2 class="text-3xl font-bold mb-2">Order Confirmed 🎉</h2>
          <p class="text-gray-500">Your delicious food is on the way.</p>

          <div class="mt-4">
            <span
              class="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {{ order.orderNumber }}
            </span>
          </div>

          <p class="text-gray-400 mt-3 text-sm">
            {{ order.createdAt }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Timeline -->
          <div class="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-8">
              <Clock3 class="w-7 h-7 text-amber-500" />
              <h2 class="text-2xl font-bold">Order Status</h2>
            </div>

            <div class="space-y-8">
              <!-- Step 1 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div
                    class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"
                  >
                    <Check class="w-6 h-6" />
                  </div>
                  <div class="w-1 h-20 bg-green-500"></div>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Order Received</h3>
                  <p class="text-gray-500">We received your order.</p>
                  <span class="text-gray-400 text-sm">Completed</span>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div
                    class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"
                  >
                    <ChefHat class="w-6 h-6" />
                  </div>
                  <div class="w-1 h-20 bg-green-500"></div>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Preparing Food</h3>
                  <p class="text-gray-500">Chef is preparing your meal.</p>
                  <span class="text-gray-400 text-sm">Completed</span>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div
                    class="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white animate-pulse"
                  >
                    <Bike class="w-6 h-6" />
                  </div>
                  <div class="w-1 h-20 bg-gray-200"></div>
                </div>
                <div>
                  <h3 class="font-bold text-lg">
                    {{ order.status }}
                  </h3>
                  <p class="text-gray-500">
                    Rider is heading to your location.
                  </p>
                  <span class="text-amber-500 font-semibold text-sm">
                    In Progress
                  </span>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400"
                >
                  <Home class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="font-bold text-lg text-gray-400">Delivered</h3>
                  <p class="text-gray-400">Waiting for delivery.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE -->
          <div class="space-y-6">
            <!-- Delivery Time -->
            <div class="bg-white rounded-3xl shadow-lg p-6">
              <div class="flex items-center gap-2 mb-4">
                <Timer class="w-6 h-6 text-amber-500" />
                <h2 class="font-bold text-lg">Delivery Time</h2>
              </div>

              <h3 class="text-4xl font-bold text-green-600">
                {{ order.estimatedTime }}
              </h3>

              <p class="text-gray-500 mt-2">Estimated arrival</p>
            </div>

            <!-- Rider -->
            <div class="bg-white rounded-3xl shadow-lg p-6">
              <div class="flex items-center gap-4">
                <div
                  class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center"
                >
                  <User class="w-8 h-8 text-amber-500" />
                </div>

                <div>
                  <h3 class="font-bold">Delivery Rider</h3>
                  <p class="text-gray-500">
                    {{ order.rider || "Not assigned" }}
                  </p>
                </div>
              </div>

              <div class="my-5 border-t border-gray-100"></div>

              <RouterLink to="/contact-rider">
                <button
                  class="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition active:scale-95"
                >
                  Contact Rider
                </button>
              </RouterLink>

              <!-- RESET -->
              <button
                @click="resetOrder"
                class="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
              >
                <Heart class="w-4 h-4" />
                Clear Order
              </button>
            </div>

            <!-- CUSTOMER INFO -->
            <div class="bg-white rounded-3xl shadow-lg p-6">
              <div class="flex items-center gap-2 mb-4">
                <Receipt class="w-6 h-6 text-amber-500" />
                <h2 class="font-bold text-lg">Customer Info</h2>
              </div>

              <div class="space-y-2 text-gray-600 text-sm">
                <p><b>Name:</b> {{ order.customer?.name }}</p>
                <p><b>Phone:</b> {{ order.customer?.phone }}</p>
                <!-- <p><b>Email:</b> {{ order.customer?.email }}</p>
                <p><b>Telegram:</b> {{ order.customer?.telegram }}</p> -->
                <p><b>Address:</b> {{ order.customer?.address }}</p>
              </div>
            </div>

            <!-- SUMMARY -->
            <div class="bg-white rounded-3xl shadow-lg p-6">
              <div class="flex items-center gap-2 mb-4">
                <Receipt class="w-6 h-6 text-amber-500" />
                <h2 class="font-bold text-lg">Order Summary</h2>
              </div>

              <div class="space-y-3">
                <div
                  v-for="item in order.items"
                  :key="item.id"
                  class="flex justify-between text-gray-600"
                >
                  <span>{{ item.name }} × {{ item.quantity }}</span>
                  <span class="font-medium">
                    ${{ ((item.price || 0) * (item.quantity || 0)).toFixed(2) }}
                  </span>
                </div>

                <div
                  class="border-t pt-3 flex justify-between font-bold text-lg"
                >
                  <span>Total</span>
                  <span class="text-amber-500">
                    {{ (order.total || 0).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  PackageCheck,
  Clock3,
  ChefHat,
  Bike,
  Home,
  Timer,
  User,
  Receipt,
  Heart,
} from "lucide-vue-next";

const order = ref(null);

onMounted(() => {
  const saved = localStorage.getItem("lastOrder");
  if (saved) order.value = JSON.parse(saved);
});

const resetOrder = () => {
  localStorage.removeItem("lastOrder");
  order.value = null;
};
</script>
