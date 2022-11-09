<script setup>
import "@/assets/style.scss";
import { ref } from "vue";
let graphBar = ref([
  {
    key: 0,
    data: "1번",
    height: "20",
  },
  {
    key: 1,
    data: "2번",
    height: "40",
  },
  {
    key: 2,
    data: "3번",
    height: "60",
  },
  {
    key: 3,
    data: "4번",
    height: "80",
  },
  {
    key: 4,
    data: "5번",
    height: "100",
  },
]);
const inputData = (event, index) => {
  graphBar.value.map((item) => {
    if (item.key === index) {
      item.height = event.target.value;
    }
  });
  graphBar.value.sort(function (a, b) {
    return a.height - b.height;
  });
};
const heightData = (index) => {
  let graph = graphBar.value.filter((item) => item.key === index);
  return graph[0].height;
};
</script>

<template>
  <div class="solting-wrapper">
    <h1>Js Sorting</h1>
    <section>
      <div class="menu-area">
        <div v-for="(item, i) in graphBar.length" class="input-area">
          <h3 class="title">
            {{ item + "번 %" }}
          </h3>
          <input
            type="text"
            :value="heightData(i)"
            @input="inputData($event, i)"
          />
        </div>
      </div>
      <div class="graph-form">
        <transition-group tag="ul" name="fade">
          <li
            v-for="(item, i) in graphBar"
            :style="{ height: `${item.height}%` }"
            :key="item.key"
          >
            {{ item.data }}
            {{ item.height }}
          </li>
        </transition-group>
      </div>
    </section>
  </div>
</template>
