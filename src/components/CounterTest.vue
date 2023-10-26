<template>
  <h1>
    Counter <span>{{ count }}</span>
  </h1>

  <div class="d-flex align-items-center">
    <button class="btn btn-primary" style="width: 50px; margin-right: 10px" @click="onCountUp">
      +
    </button>
    <button class="btn btn-primary" style="width: 50px" @click="onCountDown">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(0)

const onCountUp = () => {
  count.value++
}

const onCountDown = () => {
  if (count.value <= 0) {
    return
  }

  count.value--
}
</script>
