<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-card>
        <v-card-title class="headline"> Register Test Page </v-card-title>
        <v-card-text>
          <feder-register-form />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import federRegisterForm from '~/components/feder-register-form.vue'
export default {
  name: 'IndexPage',
  components: { federRegisterForm },
}
</script>
