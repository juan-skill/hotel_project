<template>
  <v-container>
    <hello-world />    
    <grid /> 
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Grid from '../components/Grid'  

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      Grid,
    },
  }
</script>
