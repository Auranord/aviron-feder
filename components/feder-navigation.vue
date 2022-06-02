<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="item in drawerItems"
          :key="item.title"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app class="primary-darken">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <nuxt-link to="/" >
        <v-btn icon size="64px" >
          <img src="~/static/logo_512_color.svg" width="48px" />
        </v-btn>
      </nuxt-link>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>

      <v-spacer />
      <feder-navtop />
      <v-spacer />
      <feder-session />
    </v-app-bar>
  </div>
</template>

<script>
import FederNavtop from './feder-navtop.vue'
import federSession from './feder-session.vue'
export default {
  components: { federSession, FederNavtop },
  data() {
    return {
      title: 'Aviron Feder',
      clipped: false,
      drawer: false,
      drawerItems: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
      ],
    }
  },
}
</script>

<style></style>
