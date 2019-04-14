<template lang="pug">
.home
  //- img(alt="Vue logo" src="../assets/logo.png")
  h1.title Clanhome
  h2.subtitle A quiet opening in the undergrowth...
  // HelloWorld(msg="A quiet opening in the undergrowth...")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
