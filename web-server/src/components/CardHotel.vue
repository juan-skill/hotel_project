<template>
  <v-container>
    <v-card
      v-for="hotel in hotels"
      :key="hotel.id"
    >   
    <v-layout 
      class="" 
      wrap 
      style="height:20px" 
      align-center 
      justify-center
    >
      <v-flex class="error" xs12 md12 lg4 xl4 >
          <v-img
            alt="Vuetify Logo"
            class="mx-auto d-block shrink"
            contain
            :src="require(`../assets/${hotel.image}`)"
            transition="scale-transition"
            width="300"
          />
      </v-flex>
      <v-flex class="primary pa-md-4 mx-lg-auto" xs12 md12 lg4 xl4>
        
        <v-card-title class="white--text mt-3 headline mb-2">{{ hotel.name }}</v-card-title>

          <v-rating
              class="pa-md-1"
              :value="Number(`${hotel.stars}`)"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
          ></v-rating>

        

        
        <v-container class="pa-md-4 mx-lg-auto">
          <v-toolbar>
            <v-img
            v-for="item in hotel.amenities"
            :key="item"
            :src="require(`../assets/icons/amenities/${item}.svg`)"
            max-height="16px"
            max-width="16px"
          >
          </v-img>
          </v-toolbar>
          
        </v-container>
      
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex class="warning pa-md-2 mx-lg-auto" xs12 md12 lg4 xl4>
          
          <div class="white--text text-darken-1 ml-4 mt-4">Precio por la noche de habitación</div>
          <v-card-title class="white--text"><span xs12>ARS </span> <b>{{ String(hotel.price).replace(".", ",") }}</b></v-card-title>

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
  </v-card>
</v-container>    
</template>

<script>
export default {
    name: 'CardHotel',
    data() {
      return {
        hotels: [
           {
            "_id": "2347lsjdkfs",
            "name": "Hotel Stefanos",
            "stars": 4,
            "price": 994.18,
            "image": "hotel1.jpg",
            "amenities": [
              "safety-box",
              "nightclub",
              "deep-soaking-bathtub",
              "beach",
              "business-center"
            ]
          },
          {
            "_id": "2347lsiuewks",
            "name": "Hotel Santa Cruz",
            "stars": 3,
            "price": 1267.57,
            "image": "hotel1.jpg",
            "amenities": [
              "nightclub",
              "business-center",
              "bathtub",
              "newspaper",
              "restaurant"
            ]
          }
        ]
      }
    },
    methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },

  },
}
</script>
