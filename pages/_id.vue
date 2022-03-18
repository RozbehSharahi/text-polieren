<template>
  <div>
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
import Page from '~/components/Page.vue'
import PageModel from '~/models/Page'
import assetService from '~/services/asset-service'

export default Vue.extend({
  components: {
    Container,
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
      return this.pages
        .map((v: any) => new PageModel(v))
        .sort((a: PageModel, b: PageModel) => a.getPriority() - b.getPriority())
        .reverse()
    },
    currentPage(): PageModel | null {
      const pagesProcessed = this.pagesProcessed as PageModel[]
      return (
        pagesProcessed.find((v) => v.matchesPath(this.$route.fullPath)) || null
      )
    },
  },
  async mounted() {
    // preload images
    for (const page of this.pagesProcessed) {
      await assetService.preloadImage(page.getBackgroundImage())
    }
  },
  head() {
    const currentPage = this.currentPage as PageModel
    return {
      title: `${currentPage.getTitle()} // Text_Polieren`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: currentPage.getDescription(),
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
