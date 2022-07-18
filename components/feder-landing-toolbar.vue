<template>
    <v-app-bar short app>
        <v-toolbar-title class="headline text-uppercase">
            <span>Aviron</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <nuxt-link to="/register">
            <v-btn large outlined>Registrieren</v-btn>
        </nuxt-link>
        <nuxt-link to="/login">                
            <v-btn text >Schon Mitglied?</v-btn>
        </nuxt-link>
    </v-app-bar>
</template>

<script>
export default {

}
</script>
