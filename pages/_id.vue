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
import eventService from '~/services/event-service'

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
        pagesProcessed.find((v) => v.getPath() === this.$route.fullPath) || null
      )
    },
  },
  mounted() {
    const backgroundImage = `/backgrounds/${this.currentPage.getBackgroundImage()}`
    eventService.$emit('background-change', backgroundImage)
  },
})
</script>

<style lang="scss" scoped></style>
