<template lang="pug">
nav.level
  .level-item.has-text-centered
    div
      //- Men
      p.heading Men
      p.title {{ this.$store.state.resources.men }}
  .level-item.has-text-centered
    div
      p.heading Food
      p.title {{ this.$store.state.resources.food }}
  .level-item.has-text-centered
    div
      p.heading Seeds
      p.title {{ this.$store.state.resources.seeds }}
  .level-item.has-text-centered
    div
      p.heading Wood
      p.title {{ this.$store.state.resources.wood }}
  .level-item.has-text-centered
    div
      //- Hover over for iron and stuff
      p.heading Metals
      p.title {{ this.$store.state.metals }}
</template>

<script>
export default {
  name: 'Resources',
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
