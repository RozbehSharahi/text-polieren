<template>
  <div>
    <background />
    <container class="relative">
      <page :pages="pagesProcessed" :page="currentPage" />
    </container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '~/components/Container.vue'
import Background from '~/components/Background.vue'
import Page from '~/components/Page.vue'
import PageModel from '~/models/Page'

export default Vue.extend({
  components: {
    Container,
    Background,
    Page,
  },
  async asyncData(ctx: Context): Promise<any> {
    return {
      pages: await ctx.$content('pages').fetch(),
    }
  },
  computed: {
    pagesProcessed(): PageModel[] {
      return this.pages.map((v) => new PageModel(v))
    },
    currentPage() {
      return this.pagesProcessed.find(
        (v) => v.getPath() === this.$route.fullPath
      )
    },
  },
})
</script>

<style lang="scss" scoped></style>
