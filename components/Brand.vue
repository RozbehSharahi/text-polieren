<template>
  <div class="brand">
    <img :src="'/icon.png'" alt="Text Polieren" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.brand {
  margin-bottom: 20px;
  text-align: right;
  height: 30px;

  > img {
    width: auto;
    height: 100%;
    display: inline-block;
  }
}
</style>
