<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo-aviatur.svg')"
          transition="scale-transition"
          width="200"
        />
    </div>  
    </v-app-bar>

    
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>
