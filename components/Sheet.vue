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
  color: #fff;
  // background: rgba(0, 0, 0, 0.1);
  // box-shadow: 0 35px 71px 0 rgba(0, 0, 0, 0.35);
  overflow: hidden;

  @screen sm {
    padding: 30px;
    margin-top: 50px;
  }
}
</style>
