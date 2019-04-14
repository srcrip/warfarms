<!-- Router page for the forest -->
<template lang="pug">
div
  h1.title The Red Forest
  h2.subtitle {{ mainDescription }}
  h4 {{ season }}
  <!-- h3.subtitle {{ seasonalDescription($store.state.count) }} -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'forest',
  computed: {
    mainDescription: () => "Fir trees expand away from you in every direction. The forest floor is a soft bedding of pine needles and peat moss.",
    seasonalDescription: (season) => ({
      "Spring": "The spring air is fresh and lively.",
      "Summer": "The summer air is hot and oppresive.",
      "Fall": "The fall air is crisp and blowing.",
      "Winter": "The winter air is bitter and biting."
    })[season],
    ...mapState(['season'])
  }
}
</script>
