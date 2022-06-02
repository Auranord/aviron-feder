<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card>
        <v-card-title class="headline"> Home Page </v-card-title>
        <v-card-text>
          <p v-dummy="1200"></p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card>
        <v-card-title class="headline"> Test </v-card-title>
        <v-card-text>
          <p v-dummy="150"></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
