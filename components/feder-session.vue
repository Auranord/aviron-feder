<template>

    <div>

    <nuxt-link to="/register" >
        <v-btn v-if="!loggedin" text rounded class="my-2" >
            Registrieren
        </v-btn>
    </nuxt-link>

    <nuxt-link to="/login" >
        <v-btn v-if="!loggedin" text rounded class="my-2" >
            Anmelden
        </v-btn>
    </nuxt-link>

        <v-btn v-if="loggedin" text rounded class="my-2" @click="logout">
            Ausloggen
        </v-btn>

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
            loggedin: false,
        }
    },
    mounted() {
        console.log(localStorage.getItem('Authorization'))
        if(localStorage.getItem('Authorization') != null)
            this.loggedin = true;
    },
    methods: {
        logout() {
            localStorage.removeItem('Authorization')
            window.location.href = "/";
        }
    }
    
}
</script>

<style>

</style>