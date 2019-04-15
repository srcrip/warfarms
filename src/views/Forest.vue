<!-- Router page for the forest -->
<template lang="pug">
div
  h1.title The Red Forest
  h2.subtitle {{ mainDescription }}
  h2.subtitle {{ seasonalDescription }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'forest',
  computed: {
    mainDescription: () => "Fir trees expand away from you in every direction. The forest floor is a soft bedding of pine needles and peat moss.",
    seasonalDescription: function() {
      let desc;
      switch (this.season) {
        case "Spring":
          desc = "The spring air is fresh and lively.";
          break;
        case "Summer":
          desc = "The summer air is hot and oppresive.";
          break;
        case "Fall":
          desc = "The fall air is crisp and blowing.";
          break;
        case "Winter":
          desc = "The winter air is bitter and biting.";
      }
      return desc;
      },

    //// Couldn't make this work but might be worth a shot
    // (season) => ({
    //   "Spring": "The spring air is fresh and lively.",
    //   "Summer": "The summer air is hot and oppresive.",
    //   "Fall": "The fall air is crisp and blowing.",
    //   "Winter": "The winter air is bitter and biting."
    // })[season],

    ...mapState(['season'])
  }
}
</script>
