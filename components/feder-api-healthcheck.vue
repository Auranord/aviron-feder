<template>
    <div>
        <span v-if="!$store.state.healthcheck">API nicht erreichbar.</span>
        <slot v-else />
    </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('healthCheck')
  },
}
</script>

<style>

</style>