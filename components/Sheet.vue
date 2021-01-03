<template>
  <div class="sheet">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.sheet {
  padding: 50px;
  margin-top: 10vh;
  min-height: calc(100vh - 60vh);
  background: rgba(255, 255, 255, 0.9);
  border-left: 40px dashed;
  @apply border-primary;
  box-shadow: 0 35px 71px 0 rgba(255, 255, 255, 0.75);
}
</style>
