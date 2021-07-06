<template>
    <v-content flued>
    <v-layout wrap>
      <v-flex class="error" xs12 md4 lg4 xl4 justify-space-around>
          <v-navegation-drawer>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum itaque officia iusto impedit laborum ipsum sapiente laboriosam exercitationem, voluptatibus, iste id ducimus facilis placeat et excepturi aliquid optio laudantium?</p>
          </v-navegation-drawer>
          <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum itaque officia iusto impedit laborum ipsum sapiente laboriosam exercitationem, voluptatibus, iste id ducimus facilis placeat et excepturi aliquid optio laudantium?</p>-->
      </v-flex>
      <v-flex class="secondary" xs12 md8 lg8 xl8 justify-space-around flat tile>
          <!--<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus dolor, aperiam, quisquam id porro unde facilis minima repellat impedit sequi repellendus dignissimos alias dolore magnam eveniet, suscipit quos quod!</p>-->
          <card-hotel />
      </v-flex>
    </v-layout>
  </v-content>
</template>


<script>
import CardHotel from '../components/CardHotel'
export default {
  name: 'Grid',
  components: {
      CardHotel,
  }
 }
</script>