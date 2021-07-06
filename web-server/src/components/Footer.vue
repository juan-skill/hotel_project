<template>
  <v-footer app dark padless>
    <v-card class="flex" color="indigo darken-4" flat tile>
      <v-card-text class="py-2 white--text blue darken-3 text-center">
        {{ new Date().getFullYear() }} — <strong>Aviatur</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>