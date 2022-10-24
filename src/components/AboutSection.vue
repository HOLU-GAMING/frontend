<template>
  <section id="about" >
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-1 mb-3">
                ¿A quiénes está dirigido?
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    Dirigido a todos los jugadores
                  </p>
                </v-col>
              </v-row>
              <h1 class="font-weight-light display-1 mb-3">¿Cómo participo?</h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    Puedes crear un torneo o puedes participar en un torneo
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" >
              <v-img
                src="../assets/images/control.png"
                class="d-block ml-auto mr-auto"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #07111E;
}
</style>
