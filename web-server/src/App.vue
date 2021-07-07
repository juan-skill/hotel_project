<template>
  <v-app>
    <v-container>
      <Header />
    </v-container>

    <router-view />

    <v-container>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
