<template>
  <div class="container">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.container {
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
