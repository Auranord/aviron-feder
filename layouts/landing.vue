<template>
  <v-app light>
    <feder-landing-toolbar />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <feder-footer />
  </v-app>
</template>

<script>
export default {
  name: 'LandingLayout'
}
</script>
