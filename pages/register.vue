<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-card>
        <v-card-title class="headline"> Registration Page </v-card-title>
        <v-card-text>
          <Feder-register-form />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import FederRegisterForm from '~/components/feder-register-form.vue'
export default {
  name: 'RegistrationPage',
  components: { FederRegisterForm },
}
</script>
