<template>
  <div class="navigation">
    <brand />
    <ul>
      <li><a>Homepage</a></li>
      <li><a>Über mich</a></li>
      <li><a>Kontakt</a></li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Brand from '~/components/Brand.vue'

export default Vue.extend({
  components: {
    Brand,
  },
})
</script>
<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
  font-size: 1em;
  padding: 30px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 60px 0 rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  border-bottom-left-radius: 0;
  border-left: 1px solid #ddd;

  &:hover {
  }

  li {
    border-bottom: 1px solid #ddd;
    padding: 5px 0;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
