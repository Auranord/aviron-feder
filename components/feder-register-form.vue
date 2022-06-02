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
        <Password-field-validated
          v-model="confirm"
          :rules="'required|is:' + password"
          label="Password bestätigen"
        />
      </v-form>

      <v-card-actions>
        <v-btn @click="clear">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :disabled="invalid || !validated"
          @click.prevent="register"
          >Sign Up</v-btn
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
  },
  data: () => ({
    email: '',
    FederApiHealthcheck,
    password: '',
    confirm: '',
  }),
  methods: {
    clear() {
      this.email = this.password = this.confirm = ''
      requestAnimationFrame(() => {
        this.$refs.obs.reset()
      })
    },
    async register() {
        const response = await this.$axios.post('/register', {
          email: this.email,
          password: this.password
        })
        if(response.data.error) {
          this.$store.dispatch('snackbars/addSnackbar', { visible: true, type: 'error', text: response.data.message, timeout: -1, })
        } else {
          this.$store.dispatch('snackbars/addSnackbar', { visible: true, type: 'success', text: 'Registrierung erfolgreich.', timeout: -1, })
          this.$router.push({ name: 'HomePage' })
        }
    },
  },
}
</script>
