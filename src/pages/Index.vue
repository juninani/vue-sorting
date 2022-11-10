<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import MainTable from "./MainTable";
import anime from "animejs/lib/anime.es.js";
import "swiper/css";
import "./style.scss";

function event() {
  anime({
    targets: ".main-title",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
}
</script>
<template>
  <main class="main-wrapper">
    <div class="main-form">
      <div class="main-title" @click="event">js document page</div>
      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, i) in MainTable" class="swiper-slide">
          <a class="data-title" :href="item.path">{{ item.name }}</a>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </main>
</template>
