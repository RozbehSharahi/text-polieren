<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  transition: all 300ms;
  border: 3px solid;
  @apply border-primary;
  @apply text-primary;
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
