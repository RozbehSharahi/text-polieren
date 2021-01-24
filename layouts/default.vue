<template>
  <div>
    <background />
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Background from '~/components/Background.vue'

export default Vue.extend({
  components: { Background },
})
</script>
<style lang="scss">
body {
  font-family: 'Antic Slab', sans-serif;
  font-size: 20px;
  overflow-x: hidden;
}

h1 {
  margin-bottom: 30px;
  font-weight: 900;
  font-size: 2.5em;
  text-transform: uppercase;
  line-height: 1.1em;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.1em;
  margin-top: 40px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}

$transitionSpeed: 0.7s;

.page-enter-active,
.page-leave-active {
  transition: opacity $transitionSpeed;

  .sheet {
    transition: margin $transitionSpeed, opacity $transitionSpeed,
      transform $transitionSpeed;
  }
}

.page-enter,
.page-leave-to {
  .sheet {
    opacity: 0;
    transform: translateY(20px);
    margin-top: 200px;
    pointer-events: none;
  }
}
</style>
