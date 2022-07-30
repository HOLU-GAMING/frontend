<template>
  <v-layout justify-center>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" md="6">
        <v-form
          class="pa-md-12 mx-lg-auto"
          ref="form"
          v-model="valid"
          lazy-validation
        >
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
      </v-col>
      <!-- <v-col cols="12" md="6">
        <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card>
      </v-col> -->
    </v-row>
    <DialogCreate :visible="dialog" @close="dialog = false" />
  </v-layout>
</template>

<script>
import DialogCreate from "./dialog_create_team.vue";
export default {
  components: {
    DialogCreate,
  },
  data: () => ({
    statusLoading: false,
    msgError: "",
    position: "top-right",
    dialog: false,
    nameTeam: "",
    valid: true,
    nameRules: [(v) => !!v || "El nombre es requerido"],
  }),
  computed: {},
  methods: {
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
        .get("api/teams/name/" + name)
        .then(() => {
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