<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-card>
        <v-card-title class="headline"> Login Page </v-card-title>
        <v-card-text>
          <feder-login-form />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import federLoginForm from '~/components/feder-login-form.vue'
export default {
  name: 'LoginPage',
  components: { federLoginForm },
}
</script>
