<template>

    <div>

    <nuxt-link to="/register" >
        <v-btn v-if="!loggedin" text rounded class="my-2" >
            Registrieren
        </v-btn>
    </nuxt-link>

    <!--<nuxt-link to="/login" >!-->
        <v-btn v-if="!loggedin" text rounded class="my-2" @click.stop="loggedin = !loggedin">
            Anmelden
        </v-btn>
    <!--</nuxt-link>!-->

    <!--<nuxt-link to="/logout" >!-->
        <v-btn v-if="loggedin" text rounded class="my-2" @click.stop="loggedin = !loggedin">
            Ausloggen
        </v-btn>
    <!--</nuxt-link>!-->

    <nuxt-link v-if="loggedin" to="/account" >
        <v-btn icon >
            <v-icon>mdi-account</v-icon>
        </v-btn>
    </nuxt-link>

    </div>

</template>

<script>
export default {
    data () {
        return {
            loggedin: true,
        }
    }
}
</script>

<style>

</style>