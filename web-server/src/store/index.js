import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: [],
    copyhotels: [],
    hotel: null,
    starhotels: [],
  },
  mutations: {
    setHotels(state, payload) {
      state.hotels = payload;
      state.copyhotels = payload;
    },
    setHotel(state, payload) {
      state.hotel = payload;
      state.hotels = [];
      state.hotels.push(state.hotel);
    },
    setFilterStar(state, payload) {
      payload.forEach((element) => {
        state.starhotels.push(element);
      });
      state.hotels = state.starhotels;
    },
    updateHotel(state) {
      state.starhotels = [];
    },
    updatecopyHotels(state) {
      state.hotels = state.copyhotels;
    },
  },
  actions: {
    async getHotels({ commit }) {
      try {
        const response = await axios.get(
          `http://${process.env.HOSTNAME || "127.0.0.1"}:${process.env.PORT || 3000}/api/hotels`
        );
        if (response.statusText == "OK") {
          commit("setHotels", response.data);
        }
      } catch (error) {
        console.warn(error);
      }
    },
    async getHotel({ commit }, hotelID) {
      try {
        const bodyRequest = { hotelID: hotelID };
        const headersRequest = { "Content-type": "application/json" };
        const response = await axios.get(
          `http://${process.env.HOSTNAME || "127.0.0.1"}:${process.env.PORT || 3000}/api/hotels/${hotelID}`,
          bodyRequest,
          { headersRequest }
        );

        if (response.statusText == "OK") {
          commit("setHotel", response.data);
        }
      } catch (error) {
        console.warn(error);
      }
    },
    async getHotelbystar({ commit }, star) {
      try {
        const bodyRequest = { star: star };
        const headersRequest = { "Content-type": "application/json" };
        const response = await axios.get(
          `http://127.0.0.1:3000/api/hotels/star/${star}`,
          bodyRequest,
          { headersRequest }
        );

        if (response.statusText == "OK") {
          commit("setFilterStar", response.data);
        }
      } catch (error) {
        console.warn(error);
      }
    },
    updateHotels({ commit }) {
      commit("updateHotel");
    },
    updateCopyHotels({ commit }) {
      commit("updatecopyHotels");
    },
  },
  modules: {},
});
