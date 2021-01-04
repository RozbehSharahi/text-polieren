<template>
  <div>
    <background />
    <container class="relative">
      <sheet class="p-0">
        <grid :spacing-x="50" class="min-h-full">
          <div class="sm:w-2/3">
            <div class="p-5 sm:p-20 text-0.8 sm:text-1">
              <h1>René Salim</h1>
              <p>
                Look, just because I don't be givin' no man a foot massage don't
                make it right for Marsellus to throw Antwone into a glass
                motherfuckin' house, fuckin' up the way the nigger talks.
                Motherfucker do that shit to me, he better paralyze my ass,
                'cause I'll kill the motherfucker, know what I'm sayin'?
              </p>
              <btn class="mt-10">Weiter zu <strong>"Über mich"</strong></btn>
            </div>
          </div>
          <div class="sm:w-1/3">
            <navigation class="h-full" />
          </div>
        </grid>
      </sheet>
    </container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '~/components/Container.vue'
import Grid from '~/components/Grid.vue'
import Navigation from '~/components/Navigation.vue'
import Sheet from '~/components/Sheet.vue'
import Background from '~/components/Background.vue'
import Btn from '~/components/Btn.vue'

export default Vue.extend({
  components: {
    Grid,
    Container,
    Navigation,
    Sheet,
    Background,
    Btn,
  },
})
</script>

<style lang="scss" scoped></style>
