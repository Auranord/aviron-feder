<template>
  <div>
    <client-only>
      <nuxt-link to="/register">
        <v-btn v-if="!$auth.loggedIn" text rounded class="my-2"> Registrieren </v-btn>
      </nuxt-link>

      <nuxt-link to="/login">
        <v-btn v-if="!$auth.loggedIn" text rounded class="my-2"> Anmelden </v-btn>
      </nuxt-link>

      <v-btn v-if="$auth.loggedIn" text rounded class="my-2" @click="$auth.logout()">
        Ausloggen
      </v-btn>

      <nuxt-link v-if="$auth.loggedIn" to="/account">
        <v-btn text rounded>
          {{ $auth.user }}
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>
