<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <nuxt-link v-for="link in links" :key="link.title" :to="link.to">
        <v-btn :key="link.title" text rounded class="my-2">
          {{ link.title }}
        </v-btn>
      </nuxt-link>

      <a
        v-for="icon in icons"
        :key="icon.title"
        :href="icon.to"
        target="_blank"
      >
        <v-btn :key="icon.icon" :title="icon.title" class="mx-4 mt-2" icon>
          <v-icon size="28px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </a>

      <v-btn class="mx-4 mt-2" icon @click="toggleTheme()">
        <v-icon size="28px"> mdi-brightness-6 </v-icon>
      </v-btn>

      <v-col class="py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Aviron</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Home',
        to: '/',
      },
      {
        title: 'Team',
        to: '/team',
      },
      {
        title: 'Kontakt',
        to: '/contact',
      },
    ],
    icons: [
      {
        icon: 'mdi-discord',
        title: 'Discord',
        to: 'https://discord.com/',
      },
      {
        icon: 'mdi-twitter',
        title: 'Twitter',
        to: 'https://twitter.com/',
      },
      {
        icon: 'mdi-youtube',
        title: 'Youtube',
        to: 'https://www.youtube.de/',
      },
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('useDarkTheme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>

<style></style>
