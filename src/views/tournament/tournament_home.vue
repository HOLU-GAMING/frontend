<template>
  <v-app>
    <navigation color="transparent" />
    <v-layout justify-center>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" md="6" class="pt-15">
          <v-container >
            <h1 class="pb-8 font-weight-bold">
              {{ this.tournament.name }}
            </h1>
            <h1 class="pb-8 font-weight-bold">REGISTRO DE EQUIPOS</h1>
            <v-form
              class="pa-md-12 mx-lg-auto"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-account-group-outline"
                  v-model="nameTeam"
                  :rules="nameRules"
                  required
                  placeholder="Nombre del equipo"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex justify-space-between">
                <v-btn
                  v-if="!statusLoading"
                  color="success"
                  block
                  dark
                  tile
                  class="pa-6 font-weight-bold"
                  elevation="0"
                  @click="validate"
                  >PARTICIPAR</v-btn
                >
                <v-progress-circular
                  v-else
                  indeterminate
                  color="success"
                ></v-progress-circular>
              </v-col>
            </v-form>
            <v-card-text>
              <!-- <div class="text--disabled text-uppercase text-h5 my-2">
                CARACTERISTICAS
              </div>
              <v-divider class="my-2" />
              <div class="text-uppercase blue--text">
                codigo del torneo : {{ this.tournament.id }}
              </div>
              <v-divider class="my-2" />
              <div class="text-uppercase blue--text">
                creado por : {{ this.tournament.player.nick_name }}
              </div> -->
              <!-- <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              costo de la inscripcion : {{ this.tournament.price }}
            </div> -->
            <!-- <div class="text-uppercase blue--text">
              Juego : {{ this.tournament.game.name }}
            </div> -->
            <!-- <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              tipo de torneo por : {{ this.tournament.type_tournament.name }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              Cantidad de jugadores por equipo:
              {{ this.tournament.cant_players_team }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              Cantidad de suplentes por equipo:
              {{ this.tournament.cant_replacements }}
            </div> -->
              <div class="text-uppercase text-h4 mt-6 blue--text">
                COMIENZA EN
              </div>
              <flip-countdown
                :labels="labels"
                :deadline="this.tournament.init_day.replace('T', ' ')"
              ></flip-countdown>
            </v-card-text>
          </v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            class="img"
            src="https://res.cloudinary.com/ddjlyvfdn/image/upload/v1668377055/tournaments/03-holu-esports_dtj9bs.png"
          ></v-img>
        </v-col>
      </v-row>
      <DialogCreate
        :visible="dialog"
        :tournament="this.tournament"
        :nameTeam="this.nameTeam"
        @close="dialog = false"
      />
      <v-fab-transition>
        <v-btn color="pink" dark absolute bottom right>
          COMPRAR ENTRADAS
          <!-- <v-icon>mdi-plus</v-icon> -->
        </v-btn>
      </v-fab-transition>
    </v-layout>
  </v-app>
</template>
<script>
import DialogCreate from "./dialog_create_team.vue";
import FlipCountdown from "vue2-flip-countdown";
import navigation from "./app_bar.vue";
export default {
  components: {
    DialogCreate,
    FlipCountdown,
    navigation,
  },
  data: () => ({
    statusLoading: false,
    labels: {
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    },
    msgError: "",
    position: "top-right",
    dialog: false,
    nameTeam: "",
    valid: true,
    nameRules: [(v) => !!v || "El nombre es requerido"],
    tournament: "",
  }),
  props: {
    id: {
      type: String,
      default: 0,
    },
  },
  watch: {
    id: function (val) {
      console.log(val);
      // this.career = val;
      // this.freqQuestion();
      // this.loadChat(); //CHAT
      // this.potcast();
    },
  },
  computed: {},
  mounted() {
    console.log(this.id);
    this.getTournament();
  },
  methods: {
    getTournament() {
      this.$http
        .get("tournament/" + this.id)
        .then((result) => {
          console.log(result);
          this.tournament = result.data;
          // this.msgError = "El equipo " + name + " ya se encuentra registrado";
          // this.statusLoading = false;
          // this.addErrorNotification();
        })
        .catch((err) => {
          this.msgError = err.response.data.msg;
          this.statusLoading = false;
          this.addErrorNotification();
          this.$router.push({ name: "home" });
        });
    },
    addErrorNotification() {
      this.$toast.error(this.msgError, {
        position: this.position,
        timeout: 6000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
      });
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.statusLoading = true;
        this.validateTeam(this.nameTeam.toUpperCase());
      }
    },
    validateTeam(name) {
      this.$http
        .get("teams/name/" + name)
        .then(() => {
          console.log("errr");
          this.msgError = "El equipo " + name + " ya se encuentra registrado";
          this.statusLoading = false;
          this.addErrorNotification();
        })
        .catch(() => {
          this.statusLoading = false;
          this.dialog = true;
        });
    },
  },
};
</script>

<style>
.img {
  height: 100vh;
  width: 100vw;
}
</style>