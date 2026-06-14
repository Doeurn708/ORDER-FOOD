<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sticky Header -->
    <div
      class="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <!-- Back -->
        <RouterLink
          to="/orders"
          class="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:shadow-md transition-all active:scale-95"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back</span>
        </RouterLink>

        <!-- Title -->
        <h1 class="text-xl md:text-2xl font-bold tracking-wide">
          Contact Rider
        </h1>

        <!-- Icon -->
        <div
          class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
        >
          <Bike class="w-5 h-5 text-amber-500" />
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <!-- Rider Info Card -->
      <div
        class="bg-white rounded-3xl shadow-lg p-6 flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center"
          >
            <User class="w-8 h-8 text-amber-500" />
          </div>

          <div>
            <h2 class="font-bold text-lg">
              {{ rider.name }}
            </h2>

            <p class="text-gray-500 text-sm">Delivery Rider</p>

            <p class="text-gray-400 text-sm mt-1 flex items-center gap-1">
              <Car class="w-4 h-4" />
              {{ rider.vehicle }}
            </p>
          </div>
        </div>

        <span
          class="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold"
        >
          Online
        </span>
      </div>

      <!-- Actions -->
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Call -->
        <a
          :href="`tel:${rider.phone}`"
          class="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-xl transition"
        >
          <div
            class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center"
          >
            <Phone class="w-6 h-6 text-green-600" />
          </div>

          <p class="font-semibold">Call Rider</p>
          <p class="text-gray-400 text-sm">{{ rider.phone }}</p>
        </a>

        <!-- Chat -->
        <button
          class="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-xl transition"
        >
          <div
            class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <MessageCircle class="w-6 h-6 text-blue-600" />
          </div>

          <p class="font-semibold">Chat</p>
          <p class="text-gray-400 text-sm">Send message</p>
        </button>

        <!-- Location -->
        <button
          class="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-xl transition"
        >
          <div
            class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center"
          >
            <MapPin class="w-6 h-6 text-amber-500" />
          </div>

          <p class="font-semibold">Track Location</p>
          <p class="text-gray-400 text-sm">Live tracking</p>
        </button>
      </div>

      <!-- Status Card -->
      <div class="bg-white rounded-3xl shadow-lg p-6">
        <div class="flex items-center gap-2 mb-4">
          <Truck class="w-5 h-5 text-amber-500" />
          <h2 class="font-bold text-lg">Delivery Status</h2>
        </div>

        <div class="space-y-3 text-gray-600">
          <div class="flex justify-between">
            <span>Order Status</span>
            <span class="font-semibold text-amber-500">{{ status }}</span>
          </div>

          <div class="flex justify-between">
            <span>Estimated Arrival</span>
            <span class="font-semibold">{{ eta }}</span>
          </div>

          <div class="flex justify-between">
            <span>Distance</span>
            <span class="font-semibold">2.3 km</span>
          </div>
        </div>
      </div>
      <!-- Note -->
      <div
        class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-700 flex items-start gap-3"
      >
        <Lightbulb class="w-5 h-5 text-amber-500 mt-0.5" />

        <p>You can call the rider directly if your location is hard to find.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  ArrowLeft,
  Bike,
  User,
  Phone,
  MessageCircle,
  MapPin,
  Truck,
  Lightbulb,
  Car,
} from "lucide-vue-next";

const rider = ref({
  name: "Jame Sok",
  phone: "+85512345678",
  vehicle: "Honda Click 125c",
});

const status = ref("On the way");
const eta = ref("15 - 20 min");
</script>
