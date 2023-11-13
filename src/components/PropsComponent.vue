<template>
  <div>
    <h1>Props</h1>
    <p>{{ prop }}</p>
  </div>
</template>

<script setup>
defineProps({
  prop: {
    type: String,
    default: 'Default props',
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
