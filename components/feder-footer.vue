<template>

  <v-footer padless >
    <v-row justify="center" no-gutters >

      <nuxt-link v-for="link in links" :to="link.to" :key="link.title">
        <v-btn :key="link.title" text rounded class="my-2" >
          {{ link.title }}
        </v-btn>
      </nuxt-link>

      <a v-for="icon in icons" :href="icon.to" target="_blank" :key="icon.title">
        <v-btn :title="icon.title" :key="icon.icon" class="mx-4" icon >
          <v-icon size="28px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </a>

      <v-col class="py-4 text-center" cols="12" >
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
          to: '/'
        },
        {
          title: 'Team',
          to: '/team'
        },
        {
          title: 'Kontakt',
          to: '/contact'
        },
      ],
      icons: [
        {
          icon: 'mdi-twitter',
          title: 'Twitter',
          to: 'https://twitter.com/'
        },
        {
          icon: 'mdi-youtube',
          title: 'Welcome',
          to: 'https://www.youtube.de/'
        }
      ],
    }),
  }
</script>

<style>

</style>