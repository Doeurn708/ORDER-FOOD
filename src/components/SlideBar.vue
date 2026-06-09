<template>
    <div class="h-140 bg-zinc-700">
          <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class=" w-full h-full"
  >
    <swiper-slide >
        <img class="w-full h-full " :src="bn1" alt="">
    </swiper-slide>
    <swiper-slide>
          <img class="w-full h-full " :src="bn2" alt="">
    </swiper-slide>
  </swiper>
    </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';

import bn1 from"../asset/image/bn01.jpg"
import bn2 from"../asset/image/bn02.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../asset/style/main.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const modules = [Autoplay, Pagination, Navigation];
</script>