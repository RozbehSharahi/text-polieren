<template>
  <transition name="fade">
    <div
      :key="image"
      class="background"
      :style="{ 'background-image': image && `url(${base}${image})` }"
    ></div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
import eventService from '~/services/event-service'
export default Vue.extend({
  data(): { image: string | null; base: string } {
    return {
      image: null,
      base: (this.$router.options.base || '/').replace(/\/$/, ''),
    }
  },
  mounted(): void {
    eventService.$on('background-change', (image: string) => {
      this.image = image
    })
  },
})
</script>
<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000 no-repeat center;
  background-size: cover;
  opacity: 0.5;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: ' ';
    @apply bg-primary;
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 500ms;
  transition-timing-function: ease-out;
}
.fade-leave-active {
  opacity: 1;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.1) rotate(1.5deg);
}
</style>
