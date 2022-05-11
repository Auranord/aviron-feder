<template>
  <v-app light>

    <feder-navigation />
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

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
  },
  mounted() {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else this.$vuetify.theme.dark = false;
    }
  }
}
</script>
