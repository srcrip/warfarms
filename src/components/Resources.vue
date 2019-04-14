<template lang="pug">
nav.level
  .level-item.has-text-centered
    div
      //- Men
      p.heading Men
      p.title {{ men }}
  .level-item.has-text-centered
    div
      p.heading Food
      p.title {{ food }}
  .level-item.has-text-centered
    div
      p.heading Seeds
      p.title {{ seeds }}
  .level-item.has-text-centered
    div
      p.heading Wood
      p.title {{ wood }}
  .level-item.has-text-centered
    div
      //- Hover over for iron and stuff
      p.heading Metals
      p.title {{ metals }}
</template>

<script>
export default {
  name: 'Resources',
  props: {
    men: Number,
    food: Number,
    seeds: Number,
    wood: Number,
    metals: Number,
  }
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
