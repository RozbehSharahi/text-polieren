<template>
  <div class="navigation">
    <nuxt-link :to="'/'">
      <brand />
    </nuxt-link>
    <ul>
      <li
        v-for="node in pages"
        :key="node.getPath()"
        :class="{ active: node.getPath() === page.getPath() }"
      >
        <nuxt-link :to="node.getPath()">
          {{ node.getTitle() }}
        </nuxt-link>
      </li>
    </ul>
    <div class="footer">&copy; 2021 René Salim</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Brand from '~/components/Brand.vue'
import Page from '~/models/Page'

export default Vue.extend({
  components: {
    Brand,
  },
  props: {
    pages: {
      type: Array,
      required: true,
    },
    page: {
      type: Page,
      default: null,
    },
  },
})
</script>
<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
  font-size: 1em;
  padding: 30px;
  box-shadow: 0 15px 60px 0 rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
  }

  ul {
    margin-left: -30px;
    margin-right: -30px;
  }

  li {
    transition: all 0.3s;
    > a {
      display: block;
      border-bottom: 1px solid #ddd;
      padding: 5px 30px;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover,
    &.active {
      @apply bg-primary;
      color: #fff;
    }
  }

  .footer {
    margin-top: 20px;
    font-size: 0.7em;
    text-align: right;
  }
}
</style>
