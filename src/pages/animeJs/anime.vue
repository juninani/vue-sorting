<script setup>
import anime from "animejs/lib/anime.es.js";
import "./style.scss";

const axis = () => {
  anime({
    targets: ".axis p",
    translateX: anime.stagger(10, {
      grid: [20, 15],
      from: "center",
      axis: "x",
    }),
    translateY: anime.stagger(10, {
      grid: [20, 15],
      from: "center",
      axis: "y",
    }),
    rotateZ: anime.stagger([0, 90], {
      grid: [20, 15],
      from: "center",
      axis: "x",
    }),
    delay: anime.stagger(200, { grid: [20, 15], from: "center" }),
    easing: "easeInOutQuad",
    loop: true,
  });
};

const gridEvent = () => {
  anime({
    targets: ".grid p",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(100, { grid: [20, 15], from: "center" }),
    loop: true,
  });
};
</script>
<template>
  <main class="anime-wrapper">
    <div class="anime-form">
      <div class="anime-title">anime page</div>
      <div class="anime-area">
        <div class="grid" @click="gridEvent()">
          <p v-for="item in 300"></p>
        </div>
      </div>
      <div class="anime-area">
        <div class="axis" @click="axis()">
          <p v-for="item in 300"></p>
        </div>
      </div>
    </div>
  </main>
</template>
