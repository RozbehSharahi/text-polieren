<template>
  <div>
    <background />
    <container class="relative">
      <page
        :key="currentPage.getPath()"
        :pages="pagesProcessed"
        :page="currentPage"
      />
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
  async asyncData(ctx: any): Promise<any> {
    return {
      pages: await ctx.$content('pages').fetch(),
    }
  },
  computed: {
    pagesProcessed(): PageModel[] {
      // @ts-ignore
      return this.pages.map((v: any) => new PageModel(v))
    },
    currentPage(): PageModel | null {
      const pagesProcessed = this.pagesProcessed as PageModel[]
      return (
        pagesProcessed.find((v) => v.getPath() === this.$route.fullPath) || null
      )
    },
  },
})
</script>

<style lang="scss" scoped></style>
