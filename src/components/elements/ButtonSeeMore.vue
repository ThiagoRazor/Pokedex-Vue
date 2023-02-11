<template>
  <button class="Btn">
    {{ text }}
  </button>
</template>

<script setup>
  const props = defineProps({
    text: String,
  });
</script>

<style lang="scss" scoped>
  .Btn {
    background: $darkBlack;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    color: $white;
    font-weight: bold;
    cursor: pointer;
  }
</style>
