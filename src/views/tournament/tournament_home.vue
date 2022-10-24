<template>
  <v-layout justify-center>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="10" md="10">
        <v-form
          class="pa-md-12 mx-lg-auto"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <h1 class="pb-8 font-weight-bold">{{ this.tournament.name }}</h1>
          <h1 class="pb-8 font-weight-bold">REGISTRO DE EQUIPOS</h1>
          <v-text-field
            prepend-inner-icon="mdi-account-group-outline"
            v-model="nameTeam"
            :rules="nameRules"
            required
            placeholder="Nombre del equipo"
          ></v-text-field>

          <v-btn
            v-if="!statusLoading"
            color="success"
            block
            dark
            tile
            class="pa-6 font-weight-bold"
            elevation="0"
            @click="validate"
            >CONTINUAR</v-btn
          >
          <v-progress-circular
            v-else
            indeterminate
            color="success"
          ></v-progress-circular>
        </v-form>
        <div class="flex-center">
          <v-card-text>
            <div class="text--disabled text-uppercase text-h5 my-2">
              CARACTERISTICAS
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              codigo del torneo : {{ this.tournament.id }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              creado por : {{ this.tournament.player.nick_name }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              costo de la inscripcion : {{ this.tournament.price }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              Juego : {{ this.tournament.game.name }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              tipo de torneo por : {{ this.tournament.type_tournament.name }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              Cantidad de jugadores por equipo: {{ this.tournament.cant_players_team }}
            </div>
            <v-divider class="my-2" />
            <div class="text-uppercase blue--text">
              Cantidad de suplentes por equipo: {{ this.tournament.cant_replacements }}
            </div>
            <div class="text-uppercase text-h4 mt-6 blue--text">
              COMIENZA EN
            </div>
            <flip-countdown
            :labels="labels" 
              :deadline="this.tournament.init_day.replace('T', ' ')"
            ></flip-countdown>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
    <DialogCreate
      :visible="dialog"
      :tournament="this.tournament"
      :nameTeam="this.nameTeam"
      @close="dialog = false"
    />
  </v-layout>
</template>

<script>
import DialogCreate from "./dialog_create_team.vue";
import FlipCountdown from "vue2-flip-countdown";
export default {
  components: {
    DialogCreate,
    FlipCountdown,
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