<script setup>
import anime from "animejs/lib/anime.es.js";
import "./style.scss";
const gridEvent = () => {
  anime({
    targets: ".grid p",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(100, { grid: [20, 5], from: "center" }),
    loop: true,
  });
};
</script>

<template>
  <main class="anime-wrapper">
    <div class="anime-form">
      <div class="anime-title">anime page</div>
      <div class="grid" @click="gridEvent()">
        <p v-for="item in 300"></p>
      </div>
    </div>
  </main>
</template>
