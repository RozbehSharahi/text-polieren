<template>
  <container>
    <brand />
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
import Brand from '~/components/Brand.vue'

export default Vue.extend({
  components: {
    Grid,
    Container,
    Brand,
  },
})
</script>

<style lang="scss" scoped></style>
