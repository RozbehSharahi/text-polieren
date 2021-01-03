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
  color: #fff;
  @apply bg-primary;
  transition: all 300ms;
  border-top: 5px solid #000;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
