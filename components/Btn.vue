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
  display: inline-block;
  transition: all 300ms;
  background: rgba(0, 0, 0, 0);
  @apply text-secondary;
  letter-spacing: 5px;
  outline: none;

  &:hover {
    background: #000;
    color: #fff;
    // transform: scale(1.1);
  }
}
</style>
