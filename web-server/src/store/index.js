import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels: [],
    hotel: null,
  },
  mutations: {
    setHotels(state, payload) {
      state.hotels = payload;
    },
    setHotel(state, payload) {
      state.hotel = payload;
    },
  },
  actions: {
    async getHotels({ commit }) {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/api/hotels"
        );
        if (response.statusText == "OK") {
            commit("setHotels", response.data);
        }
        console.log("helsd");
      } catch (error) {
        console.log("holas")
        console.warn(error);      
      }
    },
    async getHotel({ commit }, hotelID) {     
        try {
          console.log(hotelID);
          const bodyRequest = { hotelID: hotelID };
          const headersRequest = { "Content-type": "application/json" };
          const response = await axios.post(
            `http://127.0.0.1:3000/api/hotels/hotelID`,
            bodyRequest,
            { headersRequest }
          );

          if (response.statusText == "OK") {
            commit("setHotel", response.data);
          }
        } catch (error) {          
          console.warn(error);
        }
      }
  },
  modules: {
  }
})
