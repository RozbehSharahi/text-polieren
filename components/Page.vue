<!--suppress HtmlUnknownTag -->
<template>
  <sheet class="p-0">
    <grid :spacing-x="0" class="min-h-full">
      <div class="sm:w-full">
        <div
          class="p-5 sm:p-20 text-0.8 sm:text-1"
          :class="`titles-${page.getTitlePosition()}`"
        >
          <nuxt-content :document="page.getDocument()" />
          <div>
            <nuxt-link :to="nextPage.getPath()" class="clearfix">
              <btn class="mt-10">
                {{ nextPage.getTitle() }}
                ¶¶
              </btn>
            </nuxt-link>
          </div>
        </div>
      </div>
    </grid>
  </sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '~/components/Grid.vue'
import Sheet from '~/components/Sheet.vue'
import Btn from '~/components/Btn.vue'
import Page from '~/models/Page'

export default Vue.extend({
  components: {
    Grid,
    Sheet,
    Btn,
  },
  props: {
    pages: {
      type: Array,
      required: true,
    },
    page: {
      type: Page,
      required: true,
    },
  },
  computed: {
    nextPage(): Page {
      let currentPageIndex = null
      const pages: Page[] = this.pages as Page[]
      for (let i = 0; i < pages.length; i++) {
        if (pages[i].getPath() === this.page.getPath()) {
          currentPageIndex = i
        }
      }
      if (currentPageIndex !== null && pages[currentPageIndex + 1]) {
        return pages[currentPageIndex + 1]
      }
      return pages[0]
    },
  },
})
</script>

<style lang="scss" scoped>
.titles-right {
  ::v-deep h1,
  ::v-deep h2,
  ::v-deep h3,
  ::v-deep h4 {
    text-align: right;
  }
}
.titles-center {
  ::v-deep h1,
  ::v-deep h2,
  ::v-deep h3,
  ::v-deep h4 {
    text-align: center;
  }
}
</style>
