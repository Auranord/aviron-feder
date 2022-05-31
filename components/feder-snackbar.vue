<template>
  <div  class="text-center">
    <v-snackbar v-for="(snackbar, index) in snackbars" :key="index" v-model="snackbar.visible" :color="snackbar.type" :timeout="snackbar.timeout" :style="`bottom: ${index*60}px`">
      {{ snackbar.text }}
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="$store.dispatch('snackbars/delSnackbar')" >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    computed: {
      snackbars() { return this.$store.state.snackbars.snackbars },
    }
  }
</script>

<style>

</style>