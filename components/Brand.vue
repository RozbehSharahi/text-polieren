<template>
  <div class="brand">Text<br /><span>Polieren</span></div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.brand {
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
  line-height: 1;
  font-size: 1.3em;
  @apply text-primary;
  padding: 0 0 10px 0;
  border-bottom: 0 solid black;

  span {
    color: #000;
  }
}
</style>
