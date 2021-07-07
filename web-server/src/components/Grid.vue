<template>
    <v-main>
    <v-layout :wrap="true">
      <v-flex xs12 md4 lg4 xl4>          
        <filter-panel />     
      </v-flex>
      <v-flex xs12 md8 lg8 xl8 >          
          <card-hotel />
      </v-flex>
    </v-layout>
  </v-main>
</template>


<script>
import CardHotel from '../components/CardHotel'
import FilterPanel from '../components/FilterPanel'

export default {
  name: 'Grid',
  components: {
      CardHotel,
      FilterPanel,
  }
 }
</script>