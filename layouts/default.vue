<template>
  <v-app dark>

<feder-navigation />

    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!--
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    !-->

    <feder-footer/>

  </v-app>
</template>

<script>
import federFooter from '~/components/feder-footer.vue'
import FederNavigation from '~/components/feder-navigation.vue'
export default {
  components: { federFooter, FederNavigation },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      right: true,
      rightDrawer: false,
      title: 'Title'
    }
  }
}
</script>
