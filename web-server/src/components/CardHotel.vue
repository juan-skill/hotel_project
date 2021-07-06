<template>
<v-container>
    <v-layout class="mt-5" wrap style="height:20px" align-center justify-center>
      <v-flex class="error" xs12 md12 lg4 xl4 >
          <v-img
            alt="Vuetify Logo"
            class="mx-auto d-block shrink"
            contain
            :src="require('../assets/hotel1.jpg')"
            transition="scale-transition"
            width="300"
          />
      </v-flex>
      <v-flex class="primary pa-md-4 mx-lg-auto" xs12 md12 lg4 xl4>
        
        <v-card-title class="white--text mt-3 headline mb-2">Hotel Santa Cruz</v-card-title>
        <v-row
          align="center"
          class="pa-md-2 mx-auto"
        >
          <v-rating
              class="pa-md-1"
              :value="3"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
          ></v-rating>
        </v-row>
        <v-container class="pa-md-4 mx-lg-auto">
          <v-img
            :src="require('../assets/bathtub.svg')"
            width="30"
          >
          </v-img>
        </v-container>
      
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex class="warning pa-md-2 mx-lg-auto" xs12 md12 lg4 xl4>
          
          <div class="white--text text-darken-1 ml-4 mt-4">Precio por la noche de habitación</div>
          <v-card-title class="white--text">ARS 1,268</v-card-title>

          <v-card-actions>
            <v-btn
              color="blue darken-1"
              text
              @click="reserve"
            >
            VER HOTEL
          </v-btn>
      </v-card-actions>
      </v-flex>
    </v-layout>
</v-container>    
</template>

<script>
export default {
    name: 'CardHotel',
    methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },

  },
}
</script>
