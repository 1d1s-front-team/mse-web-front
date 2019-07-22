<template>
  <section class="container">
    <div>
      <template>
        <v-container fluid grid-list-md>
          <v-data-iterator
            :items="items"
            content-tag="v-layout"
            hide-actions
            row
            wrap
          >
            <template v-slot:item="props">
              <v-flex
                xs12
                sm12
                md6
                lg4
              >
                <v-card>
                  <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-tile>
                      <v-list-tile-content>Calories:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                      <v-list-tile-content>Fat:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                      <v-list-tile-content>Carbs:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                      <v-list-tile-content>Protein:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                      <v-list-tile-content>Sodium:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                      <v-list-tile-content>Calcium:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                      <v-list-tile-content>Iron:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </template>
          </v-data-iterator>
        </v-container>
      </template>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },

  data: () => ({
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    })
  }
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

