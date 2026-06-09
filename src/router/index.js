import MenuView from "@/views//menu/MenuView.vue";
import CartView from "@/views/cart/CartView.vue";
import OrderTrackingView from "@/views/order/OrderTrackingView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/cart",
    component: CartView,
  },
  {
    path: "/orders",
    component: OrderTrackingView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
