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
  padding: 5px 10px;
  transition: all 300ms;
  border-bottom: 4px solid black;
  @apply border-primary;
  background: rgba(0, 0, 0, 0);
  color: #fff;
  font-weight: bold;
  outline: none;

  &:hover {
    background: #000;
    color: #fff;
    // transform: scale(1.1);
  }
}
</style>
