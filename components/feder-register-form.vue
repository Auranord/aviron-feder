<template>

  <ValidationObserver ref="obs" v-slot="{ invalid, validated, validate }">

        <v-form>
          <Text-field-validated rules="required|email" v-model="email" label="E-mail" />
          <Text-field-validated rules="required" v-model="password" label="Password" />
          <Text-field-validated :rules="'required|is:' + password" v-model="confirm" label="Password bestätigen" />
        </v-form>

      <v-card-actions>
        <v-btn @click="clear">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="validate">Validate</v-btn>
        <v-btn color="primary" @click.prevent="submit" :disabled="invalid || !validated">Sign Up</v-btn>
      </v-card-actions>

  </ValidationObserver>

</template>

<script>
import SelectValidated from './forms/Select-validated.vue';
import TextFieldValidated from './forms/TextField-validated.vue';

export default {
  data: () => ({
    email: "",
    password: "",
    confirm: "",
  }),
  components: {
    TextFieldValidated,
    SelectValidated
  },
  methods: {
    async clear() {
      this.email = this.password = this.confirm = "";
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
    },
    async submit() {
      console.log('Submitting!')
    }
  }
};
</script>
