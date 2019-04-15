<template lang="pug">
.home
  //- img(alt="Vue logo" src="../assets/logo.png")
  h1.title Clanhome
  h2.subtitle A quiet opening in the undergrowth...
  // HelloWorld(msg="A quiet opening in the undergrowth...")
  .columns
    .column.is-half
      nav.panel.is-size-6
        p.panel-heading
          | actions
        .panel-block
          p.control.has-icons-left
            input.input.is-small(type='text' placeholder='search')
            span.icon.is-small.is-left
              i.fas.fa-search(aria-hidden='true')
        p.panel-tabs
          a.is-active actions
          a build
          a research
        .panel-block
          p.has-text-weight-semibold.action-title Forage
          p.has-text-weight-light.has-text-grey
            | Foraging is sometimes the only option.
          button.button.is-small.is-outlined.action-button(v-on:click='doForage')
            | Go
        .panel-block
          button.button.is-link.is-outlined.is-fullwidth
            | reset all filters
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['resources'])
  },
  methods: {
    doForage: function (event) {
      if (event) {
        this.$store.commit('mutateHours', -1)
        this.$store.commit('mutateResources', { kind: 'food', amount: 2 })
      }
    }
  }
}
</script>

<style lang="sass">
.is-margin-auto
  margin: auto

.action-button
  margin-left: auto

.action-title
  margin-right: 16px
</style>
