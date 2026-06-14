<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div
        class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        <RouterLink
          to="/menu"
          class="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition"
        >
          <ArrowLeft class="w-5 h-5" />
          Back
        </RouterLink>

        <h1 class="text-xl md:text-2xl font-bold text-amber-500">
          Order Tracking
        </h1>

        <div></div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- Status Card -->
      <div class="bg-white rounded-3xl shadow-lg p-6 mb-8">
        <div class="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <p class="text-gray-500">Order ID</p>
            <h2 class="font-bold text-xl">ORD-2026-001</h2>
          </div>

          <div>
            <p class="text-gray-500">Estimated Delivery</p>
            <h2 class="font-bold text-xl text-green-600">25 Minutes</h2>
          </div>

          <div>
            <p class="text-gray-500">Payment Status</p>

            <span
              class="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold"
            >
              Paid
            </span>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Tracking Timeline -->
        <div class="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6">
          <div class="flex items-center gap-3 mb-8">
            <PackageCheck class="w-7 h-7 text-amber-500" />
            <h2 class="text-xl font-bold">Order Status</h2>
          </div>

          <div class="space-y-8">
            <!-- Step 1 -->
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center"
                >
                  <Check class="w-6 h-6" />
                </div>

                <div class="w-1 h-20 bg-green-500"></div>
              </div>

              <div>
                <h3 class="font-bold text-lg">Order Confirmed</h3>

                <p class="text-gray-500">Your order has been received.</p>

                <span class="text-sm text-gray-400"> 10:15 AM </span>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center"
                >
                  <ChefHat class="w-6 h-6" />
                </div>

                <div class="w-1 h-20 bg-green-500"></div>
              </div>

              <div>
                <h3 class="font-bold text-lg">Preparing Food</h3>

                <p class="text-gray-500">Our chef is preparing your meal.</p>

                <span class="text-sm text-gray-400"> 10:18 AM </span>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center animate-pulse"
                >
                  <Bike class="w-6 h-6" />
                </div>

                <div class="w-1 h-20 bg-gray-200"></div>
              </div>

              <div>
                <h3 class="font-bold text-lg">Out For Delivery</h3>

                <p class="text-gray-500">Rider is on the way.</p>

                <span class="text-sm text-amber-500 font-semibold">
                  In Progress
                </span>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center"
                >
                  <Home class="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 class="font-bold text-lg text-gray-400">Delivered</h3>

                <p class="text-gray-400">Waiting for delivery completion.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="space-y-6">
          <div class="bg-white rounded-3xl shadow-lg p-6">
            <div class="flex items-center gap-2 mb-5">
              <ShoppingBag class="w-6 h-6 text-amber-500" />
              <h2 class="font-bold text-lg">Order Summary</h2>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between">
                <span>Burger x2</span>
                <span>$20.00</span>
              </div>

              <div class="flex justify-between">
                <span>Pizza x1</span>
                <span>$15.00</span>
              </div>

              <div class="flex justify-between">
                <span>Drink x2</span>
                <span>$8.00</span>
              </div>

              <hr />

              <div class="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span class="text-amber-500">$43.00</span>
              </div>
            </div>
          </div>

          <!-- Delivery Address -->
          <div class="bg-white rounded-3xl shadow-lg p-6">
            <div class="flex items-center gap-2 mb-4">
              <MapPin class="w-6 h-6 text-red-500" />
              <h2 class="font-bold text-lg">Delivery Address</h2>
            </div>

            <p class="text-gray-600">
              Street 2004, Sangkat Teuk Thla, Khan Sen Sok, Phnom Penh, Cambodia
            </p>
          </div>

          <!-- Rider -->
          <div class="bg-white rounded-3xl shadow-lg p-6">
            <div class="flex items-center gap-4">
              <div
                class="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center"
              >
                <User class="w-7 h-7 text-amber-500" />
              </div>

              <div>
                <h3 class="font-bold">Delivery Rider</h3>

                <p class="text-gray-500">John Rider</p>
              </div>
            </div>

            <button
              class="mt-5 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-2xl font-semibold transition"
            >
              Contact Rider
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowLeft,
  Check,
  PackageCheck,
  ChefHat,
  Bike,
  Home,
  ShoppingBag,
  MapPin,
  User,
} from "lucide-vue-next";
</script>
