<template>
  <sheet class="p-0">
    <grid :spacing-x="0" class="min-h-full">
      <div class="sm:w-2/3">
        <div class="p-5 sm:p-20 text-0.8 sm:text-1">
          <nuxt-content :document="page.getDocument()" />
          <nuxt-link :to="nextPage.getPath()" class="clearfix">
            <btn class="mt-10">
              <font-awesome-icon icon="chevron-down" />
              Weiter zu <strong>{{ nextPage.getTitle() }} </strong>
            </btn>
          </nuxt-link>
        </div>
      </div>
      <div class="sm:w-1/3">
        <navigation :pages="pages" :page="page" class="h-full" />
      </div>
    </grid>
  </sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '~/components/Grid.vue'
import Navigation from '~/components/Navigation.vue'
import Sheet from '~/components/Sheet.vue'
import Btn from '~/components/Btn.vue'
import Page from '~/models/Page'

export default Vue.extend({
  components: {
    Grid,
    Navigation,
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

<style lang="scss" scoped></style>
