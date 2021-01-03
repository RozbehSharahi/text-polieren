<template>
  <div>
    <background />
    <container class="relative">
      <sheet>
        <grid :spacing-x="50">
          <div class="sm:w-2/3">
            <h1>René Salim</h1>
            <p>
              Look, just because I don't be givin' no man a foot massage don't
              make it right for Marsellus to throw Antwone into a glass
              motherfuckin' house, fuckin' up the way the nigger talks.
              Motherfucker do that shit to me, he better paralyze my ass, 'cause
              I'll kill the motherfucker, know what I'm sayin'?
            </p>
            <btn class="mt-10">Weiter zu <strong>"Über mich"</strong></btn>
          </div>
          <div class="sm:w-1/3">
            <navigation />
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
