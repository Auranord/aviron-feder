<template>
    <div>
        <section>
            <v-parallax :src="require('@/static/gammeligeBurg.png')" height="400">
                <v-layout column align-center justify-center>
                    <img src="~/static/logo_512_color.svg" width="300px"/>
                    <h1 
                        class="white--text mb-5 text-xs-center" 
                        style="font-weight: 900"
                        >Mittelalter-Polit-RP in Minecraft
                    </h1>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-card>
                <v-card-title class="headline"> Test Eins </v-card-title>
                    <v-card-text>
                        <p v-dummy="50"></p>
                    </v-card-text>
                <v-card-title class="headline"> Test Eins </v-card-title>
                <v-card-text>
                        <p v-dummy="50"></p>
                </v-card-text>
                <v-card-title class="headline"> Test Eins </v-card-title>
                <v-card-text>
                    <p v-dummy="50"></p>
                </v-card-text>
            </v-card>
        </section>

        <section>
            <v-carousel 
                height="400px" 
                cycle interval="5000"
                hide-delimiters
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="(item,promoImage) in promoImages"
                    :key="promoImage"
                    :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </section>

        <section>
            <v-card>
                <v-card-title class="headline"> Test Eins </v-card-title>
                    <v-card-text>
                        <p v-dummy="50"></p>
                    </v-card-text>
                <v-card-title class="headline"> Test Eins </v-card-title>
                <v-card-text>
                        <p v-dummy="50"></p>
                </v-card-text>
                <v-card-title class="headline"> Test Eins </v-card-title>
                <v-card-text>
                    <p v-dummy="50"></p>
                </v-card-text>
            </v-card>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
    layout: 'landing',
    data () {
    return {
      promoImages: [
        {
          src: "~/static/gammeligeBurg.png",
        },
        {
          src: "~/static/gammeligeBurg.png",
        },
        {
          src: "~/static/gammeligeBurg.png",
        },
        {
          src: "~/static/gammeligeBurg.png",
        },
      ],
    }
  },
}
</script>

<style>

</style>