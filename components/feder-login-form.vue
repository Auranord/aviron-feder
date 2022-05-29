<template>
  <ValidationObserver ref="obs" v-slot="{ invalid, validated, validate }">
    <v-form>
      <Text-field-validated
        v-model="email"
        rules="required|email"
        label="E-mail"
      />
      <Text-field-validated
        v-model="password"
        rules="required"
        label="Password"
      />
    </v-form>

    <v-card-actions>
      <v-btn @click="clear">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="validate">Validate</v-btn>
      <v-btn
        color="primary"
        :disabled="invalid || !validated"
        @click.prevent="login"
        >Login</v-btn
      >
    </v-card-actions>
  </ValidationObserver>
</template>

<script>
import TextFieldValidated from './forms/TextField-validated.vue'

export default {
  components: {
    TextFieldValidated,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    clear() {
      this.email = this.password = this.confirm = ''
      requestAnimationFrame(() => {
        this.$refs.obs.reset()
      })
    },
    login() {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
    },
  },
}
</script>
