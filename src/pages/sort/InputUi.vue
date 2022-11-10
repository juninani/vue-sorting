<script setup>
const props = defineProps(["graphData", "changeEvent", "keyTitle"]);
</script>

<template>
  <div v-for="(item, i) in props.graphData.length" class="input-area">
    <h3 class="title">
      {{ item + "번 %" }}
    </h3>
    <input type="text" :value="keyTitle(i)" @input="changeEvent($event, i)" />
  </div>
</template>
