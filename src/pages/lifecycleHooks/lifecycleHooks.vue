<script setup>
import { computed, onMounted, onUpdated, ref, watch } from "vue";
import "./style.scss";

let buttonYn = ref(false);
const obj = {
  foo: ref(1),
};
const { foo } = obj;

//랜더가 되는 순간
onMounted(() => {
  console.log("componentns");
});

//dom이 업데이트 된 후 이벤트
onUpdated(() => {
  console.log(buttonYn.value);
  console.log("dddd");
});

//특정값이 변경될때
watch(buttonYn, (val, old) => {
  console.log(val, old);
});

//읽기 전용 값
let ynText = computed(() => `buttonYn is ${buttonYn.value}`);

const buttonHandler = () => {
  console.log(buttonYn.value);
  buttonYn.value = !buttonYn.value;
};
</script>

<template>
  <main class="life-wrapper">
    <div class="life-form">
      <div class="life-title">Lifecylce test</div>
      <!--반응형 버튼 텍스트 언래핑-->
      <div class="test-section">
        <div class="button-area">
          <button @click="buttonHandler">button</button>
        </div>
        <div class="count">button: {{ buttonYn }}</div>
        <div class="count">{{ ynText }}</div>
      </div>

      <!--언래핑은 ref가 템플릿 렌더 컨텍스트의 최상위 속성인 경우 적용 -->
      <div class="test-section">
        <div class="text">{{ obj.foo + 1 }}</div>
        <div class="text">{{ foo + 1 }}</div>
      </div>
    </div>
  </main>
</template>
