<template>
  <div>
    <v-card
      v-for="hotel in hotels"
      :key="hotel.id"
      :loading="loading"
      class="mx-auto my-12"
      :class="{ 'cls-div': $vuetify.breakpoint.lg }"
    >
      <div xs12 md14 lg4 xl4>
        <v-img
          class="cls-img mx-auto d-block"
          max-width="250px"
          :src="require(`../assets/hotels/${hotel.image}`)"
        ></v-img>
      </div>

      <div xs12 md4 lg4 xl4>
        <v-card-title>{{ hotel.name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="Number(`${hotel.stars}`)"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-row>

          <div class="hola my-4">
            <v-img
              class="mx-1"
              max-height="15px"
              max-width="15px"
              v-for="amenitie in hotel.amenities"
              :key="amenitie"
              :src="require(`../assets/icons/amenities/${amenitie}.svg`)"
            ></v-img>
          </div>
        </v-card-text>
      </div>

      <div xs12 md4 lg4 xl4>
        <v-divider vertical class="mx-4"></v-divider>

        <div class="group3">
          <span>Precio por noche por habitación</span>

          <div class="btn-blue">
            <v-btn depressed color="primary" block>
              VER HOTEL
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.hola {
  display: flex;
}

.group3 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.btn-blue {
  width: 80%;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.cls-img {
  margin: 2rem;
  padding-top: 2rem;
}

.cls-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState(["hotels"]),
  },
  mounted() {
    this.getHotels();
  },
  methods: {
    reserve() {
      this.loading = true;
      //setTimeout(() => (this.loading = false), 5000);
    },
    ...mapActions(["getHotels"]),
  },

};
</script>
