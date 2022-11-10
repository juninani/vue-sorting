<script setup>
import "./style.scss";
import { ref } from "vue";
import GraphUl from "@/pages/sort/GraphUi.vue";
import GraphSetData from "@/pages/sort/InputUi.vue";

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
        <GraphSetData
          :graphData="graphBar"
          :changeEvent="inputData"
          :keyTitle="heightData"
        />
      </div>
      <div class="graph-form">
        <GraphUl :graphData="graphBar" />
      </div>
    </section>
  </div>
</template>
