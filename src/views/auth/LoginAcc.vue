<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50">
    <div class="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      
      <div class="flex items-center justify-between mb-8">
        <RouterLink to="/" class="text-gray-400 hover:text-amber-400 transition-colors">
          <ArrowLeft class="w-6 h-6" />
        </RouterLink>
        <h2 class="text-xl font-bold text-sky-500">ព័ត៌មានអតិថិជន</h2>
        <span class="text-pink-400 text-2xl"><i class="fa-solid fa-face-grin-hearts"></i></span>
      </div>

      <div class="space-y-4">
        <input v-model="form.name" placeholder="ឈ្មោះពេញ" class="input" />
        <input v-model="form.phone" placeholder="លេខទូរស័ព្ទ" class="input" />
        <textarea v-model="form.address" placeholder="អាសយដ្ឋានដឹកជញ្ជូន" class="input resize-none" rows="2"></textarea>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-100">
        <div class="flex justify-between items-center mb-6">
          <span class="text-gray-500 font-medium">សរុបទាំងអស់</span>
          <span class="text-2xl font-black text-gray-900">
            ${{ cartStore.totalPrice ? cartStore.totalPrice.toFixed(2) : "0.00" }}
          </span>
        </div>

        <button
          @click="placeOrder"
          :disabled="isProcessing"
          class="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200"
        >
          {{ isProcessing ? "កំពុងដំណើរការ..." : "បញ្ជាទិញ" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import Swal from "sweetalert2";
import { ArrowLeft } from "lucide-vue-next";

const router = useRouter();
const cartStore = useCartStore();
const isProcessing = ref(false);

const form = reactive({
  name: "",
  phone: "",
  address: "",
});

const placeOrder = () => {
  if (cartStore.items.length === 0) {
    Swal.fire({ icon: "warning", title: "អូ! កន្ត្រកទទេ", text: "សូមបន្ថែមទំនិញចូលកន្ត្រកសិន!" });
    return;
  }

  if (!form.name || !form.phone || !form.address) {
    Swal.fire({ 
      icon: "error", 
      title: "ព័ត៌មានមិនគ្រប់គ្រាន់", 
      text: "សូមបំពេញឈ្មោះ លេខទូរស័ព្ទ និងអាសយដ្ឋានឱ្យបានត្រឹមត្រូវ។" 
    });
    return;
  }

  isProcessing.value = true;
  Swal.fire({ title: "កំពុងបញ្ជាទិញ...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

  setTimeout(() => {
    const orderData = {
      id: Date.now(),
      customer: { ...form },
      items: [...cartStore.items],
      total: cartStore.totalPrice,
      createdAt: new Date().toLocaleString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));
    isProcessing.value = false;
    
    Swal.close();
    Swal.fire({ icon: "success", title: "បញ្ជាទិញជោគជ័យ!", showConfirmButton: false, timer: 2000 })
      .then(() => {
        cartStore.clearCart();
        router.push("/orders");
      });
  }, 1500);
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  outline: none;
  transition: all 0.2s ease;
}
.input:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.1);
}
</style>