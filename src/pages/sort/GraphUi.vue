<script lang="ts" setup>
const props = defineProps<{
  graphData: {
    height: number;
    key: number;
    data: string;
  }[];
}>();
</script>

<template>
  <transition-group tag="ul" name="fade">
    <li
      v-for="(item, i) in props.graphData"
      :style="{ height: `${item.height}%` }"
      :key="item.key"
    >
      {{ item.data }}
      {{ item.height }}
    </li>
  </transition-group>
</template>
