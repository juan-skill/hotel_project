<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>Filtros</v-toolbar-title>
      </v-toolbar>

      <v-list color="white">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-toolbar>
                <img
                  :src="require('../assets/filters/search.svg')"
                  width="30"
                />
                <span>Nombre del Hotel</span>
              </v-toolbar>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="input-search">
              <v-toolbar>
                <v-icon>mdi-chevron-down</v-icon>
                <v-text-field
                  type="input"
                  v-model="hotelSearch"
                  label="Hotel"
                  hide-details="auto"
                  v-on:keyup.13="printHotel"
                  @input="printHotel"
                ></v-text-field>
              </v-toolbar>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-toolbar>
                <v-icon>mdi-call-missed</v-icon>
                <span>Todas las Estrellas</span>
              </v-toolbar>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-checkbox
                class="ml-4 mb-1"
                v-for="(item, index) in stars"
                :key="index"
                v-model="selected"
                :label="item.name"
                :value="item.id"
                @change="printState"
              ></v-checkbox>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<style scoped>
.cls-input {
  border-block-end-color: black;
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "FilterPanel",
  data() {
    return {
      stars: [
        { name: "⭐", id: 1 },
        { name: "⭐⭐", id: 2 },
        { name: "⭐⭐⭐", id: 3 },
        { name: "⭐⭐⭐⭐", id: 4 },
        { name: "⭐⭐⭐⭐⭐", id: 5 },
      ],
      selected: [],
      hotelSearch: "",
    };
  },
  computed: {
    ...mapState(["hotels", "hotel", "copyhotels"]),
  },
  methods: {
    printState() {
      this.updateHotels();
      this.selected.forEach((element) => {
        this.getHotelbystar(element);
      });
      if (this.selected.length == 0)
        this.updateCopyHotels();
    },
    async printHotel() {
      let nameHotel = this.hotelSearch;
      if (nameHotel) {
        let resulthotel = this.hotels.filter(
          (hotel) => hotel.name.toLowerCase() == nameHotel.toLowerCase()
        );
        if (resulthotel.length){
          this.getHotel(resulthotel[0]._id);
        }
      }
      if (nameHotel.length == 0)
          this.updateCopyHotels();
    },
    ...mapActions(["getHotel", "getHotelbystar", "updateHotels", "updateCopyHotels"]),
  },
};
</script>
