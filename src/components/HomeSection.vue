<template>
  <section id="hero">
    <v-carousel
    cycle
    height="750"
    hide-delimiter-background
    show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-parallax dark :src="slide.src" height="750">
          <v-row align="center" justify="center">
            <v-col cols="10">
              <v-row align="center" justify="center">
                <v-col cols="12" md="6" xl="8">
                  <h1 class="display-2 font-weight-bold mb-4">Holu eSports</h1>
                  <h1 class="font-weight-light">
                    Diviértete y gana dinero jugando
                  </h1>
                  <v-btn
                    rounded
                    outlined
                    large
                    dark
                    @click="$vuetify.goTo('#features')"
                    class="mt-5"
                  >
                    Saber más
                    <v-icon class="ml-2">mdi-arrow-down</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-parallax>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid id="features" class="mt-2">
      <v-slide-group v-model="model" class="pa-4" show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="300"
            width="200"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-expand-transition>
        v-if="model != null" height="200" tile >
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h6">Selected {{ model }}</h3>
        </v-row>
      </v-expand-transition>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      slides: [
        {
          src: require("../assets/images/gaming.jpg"),
        },
        {
          src: require("../assets/images/gaming.jpg"),
        },
        {
          src: require("../assets/images/gaming.jpg"),
        },
        {
          src: require("../assets/images/gaming.jpg"),
        },
      ],
    };
  },
  methods: {},
};
</script>