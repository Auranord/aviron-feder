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
      <Text-field-validated
        v-model="confirm"
        :rules="'required|is:' + password"
        label="Password bestätigen"
      />
    </v-form>

    <v-card-actions>
      <v-btn @click="clear">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="validate">Validate</v-btn>
      <v-btn
        color="primary"
        :disabled="invalid || !validated"
        @click.prevent="register"
        >Sign Up</v-btn
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
      const respone = await this.$axios.post('/register', {
        email: this.email,
        password: this.password
      })
      
      if(respone.status === 200) {
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>
