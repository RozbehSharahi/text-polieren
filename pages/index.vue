<template>
  <container>
    <grid>
      <div class="w-1/2">Hello</div>
      <div class="w-1/2">World</div>
    </grid>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '~/components/Grid.vue'
import Container from '~/components/Container.vue'

export default Vue.extend({
  components: {
    Grid,
    Container,
  },
})
</script>

<style lang="scss" scoped></style>
