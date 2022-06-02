<template>
  <Feder-api-healthcheck>
    <ValidationObserver ref="obs" v-slot="{ invalid, validated }">
      <v-form>
        <Text-field-validated
          v-model="email"
          rules="required|email"
          label="E-mail"
        />
        <Password-field-validated
          v-model="password"
          rules="required"
          label="Password"
        />
      </v-form>

      <v-card-actions>
        <v-btn @click="clear">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :disabled="invalid || !validated"
          @click.prevent="login"
          >Login</v-btn
        >
      </v-card-actions>
    </ValidationObserver>
  </Feder-api-healthcheck>
</template>

<script>
import FederApiHealthcheck from './feder-api-healthcheck.vue'
import PasswordFieldValidated from './forms/PasswordField-validated.vue'
import TextFieldValidated from './forms/TextField-validated.vue'

export default {
  components: {
    TextFieldValidated,
    PasswordFieldValidated,
    FederApiHealthcheck,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  mounted() {
    if(this.$auth.loggedIn)
      this.$router.push({ name: 'index' })
  },
  methods: {
    clear() {
      this.email = this.password = this.confirm = ''
      requestAnimationFrame(() => {
        this.$refs.obs.reset()
      })
    },
    async login() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        if(response.data.error) {
          this.$store.dispatch('snackbars/addSnackbar', { visible: true, type: 'error', text: response.data.message, timeout: -1, })
        } else {
          this.$store.dispatch('snackbars/addSnackbar', { visible: true, type: 'success', text: 'Login erfolgreich.', timeout: -1, })
        }
      } catch (error) {
        this.$store.dispatch('snackbars/addSnackbar', { visible: true, type: 'error', text: 'Login nicht erfolgreich.', timeout: -1, })
      }
    },
  },
}
</script>
