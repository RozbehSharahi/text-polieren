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
  padding: 15px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 35px 71px 0 rgba(0, 0, 0, 0.35);
  overflow: hidden;
  border: 20px solid #fff;
  /*@apply border-primary;*/

  @screen sm {
    padding: 30px;
    margin-top: 50px;
  }
}
</style>
