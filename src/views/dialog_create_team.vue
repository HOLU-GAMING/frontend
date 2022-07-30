<template>
  <v-dialog v-model="show" max-width="800px">
    <v-card color="#1E2938" dark>
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>
      <v-row v-if="step === 1" align="center" justify="center">
        <v-col cols="12" md="6">
          <v-btn
            :disabled="players.length === 1"
            class="mx-2"
            dark
            tile
            @click="removePlayer"
            color="primary"
          >
            Eliminar un jugador
            <v-icon right> mdi-minus </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn
            :disabled="
              players.length ===
              cantCaptain + cantPlayers + cantPlayersReplacements
            "
            class="mx-2"
            dark
            tile
            @click="addPlayer"
            color="success"
          >
            <v-icon left> mdi-plus </v-icon>
            Agregar un jugador
          </v-btn>
        </v-col>
      </v-row>
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-card
              color="#1E2938"
              dark
              class="overflow-y-auto"
              max-height="300"
            >
              <v-col
                v-for="(icon, i) in players"
                :key="i"
                :cols="12"
                :id="'list-item-' + (i + 1)"
              >
                <v-card-title
                  class="text-h6 font-weight-regular justify-space-between"
                >
                  <span>{{ i + 1 }}º Jugador</span>
                </v-card-title>
                <v-row no-gutters>
                  <v-col cols="12" md="3">
                    <v-text-field
                      class="pa-md-4 mx-lg-auto"
                      label="Nombres"
                      :rules="firstNameRules"
                      required
                      v-model="players[i].first_name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      class="pa-md-4 mx-lg-auto"
                      label="Apellidos"
                      :rules="lastNameRules"
                      required
                      v-model="players[i].last_name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      class="pa-md-4 mx-lg-auto"
                      label="Nick"
                      :rules="nickNameRules"
                      required
                      v-model="players[i].nick_name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      class="pa-md-4 mx-lg-auto"
                      label="CI"
                      :rules="dniNameRules"
                      required
                      v-model="players[i].dni"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" md="4">
                    <v-text-field
                      class="pa-md-4 mx-lg-auto"
                      label="Teléfono"
                      :rules="phoneRules"
                      required
                      v-model="players[i].phone_number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      class="pa-md-4 mx-lg-auto"
                      label="Correo"
                      :rules="emailRules"
                      required
                      v-model="players[i].email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-menu
                      ref="menu"
                      v-model="players[i].menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="players[i].date_birth"
                          label="Fecha de nacimiento"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="players[i].date_birth"
                        :max="
                          new Date(
                            Date.now() - new Date().getTimezoneOffset() * 60000
                          )
                            .toISOString()
                            .substr(0, 10)
                        "
                        min="1950-01-01"
                        @change="$refs.menu[i].save(players[i].activePicker)"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
            <span class="text-caption white--text text--darken-1">
              Se enviará un link de confirmación a los telefonos y correos
              ingresados
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-card
              color="#1E2938"
              dark
              class="overflow-y-auto"
              max-height="300"
            >
              <v-row no-gutters>
                <v-col
                  v-for="(icon, i) in players"
                  :key="i"
                  cols="12"
                  :md="12 / players.length"
                >
                  <v-card color="#1E2938" dark>
                    <v-row align="center" justify="center">
                      <v-col cols="12" md="3">
                        <v-card-title
                          class="text-h5 justify-center"
                          primary-title
                          style="height: 100px; position: relative"
                        >
                          <v-avatar size="100">
                            <v-img
                              v-if="!players[i].imageUrl"
                              src="@/assets/user.jpg"
                              height="150px"
                              width="150px"
                            />
                            <v-img
                              v-else
                              :src="players[i].imageUrl"
                              height="150px"
                              width="150px"
                            />
                          </v-avatar>
                          <v-btn
                            color="pink"
                            dark
                            small
                            absolute
                            bottom
                            right
                            fab
                            @click="(indexItem = i), $refs.image[i].click()"
                          >
                            <input
                              type="file"
                              style="display: none"
                              ref="image"
                              accept="image/*"
                              @change="onFilePicked"
                            />
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                        </v-card-title>
                      </v-col>
                    </v-row>
                    <v-card-title class="text-h5 justify-center">
                      {{ players[i].first_name }}
                    </v-card-title>
                    <v-card-actions>
                      <v-combobox
                        v-model="players[i].rol"
                        :items="itemsRol"
                        label="Rol"
                      ></v-combobox>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
            <h3 class="text-h6 font-weight-light mb-2">
              La imagen de cada jugador es opcional
            </h3>
            <span class="text-caption white--text text--darken-1">
              Recuerda que solo puede ver {{ cantCaptain }} Capitan,
              {{ cantPlayers }} Jugadores y
              {{ cantPlayersReplacements }} Sustituto
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text>
            <v-row no-gutters align="center" justify="center">
              <v-col cols="12" md="4">
                <v-card-title
                  class="text-h5 justify-center"
                  primary-title
                  style="height: 280px; position: relative"
                >
                  <v-avatar size="200">
                    <v-img
                      v-if="!imageUrl"
                      src="@/assets/logoTeam.jpg"
                      height="250px"
                      width="250px"
                    />
                    <v-img
                      v-else
                      :src="imageUrl"
                      height="150px"
                      width="150px"
                    />
                  </v-avatar>
                  <v-btn
                    color="pink"
                    dark
                    small
                    absolute
                    right
                    fab
                    @click="$refs.image.click()"
                  >
                    <input
                      type="file"
                      style="display: none"
                      ref="image"
                      accept="image/*"
                      @change="onFilePickedOne"
                    />
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card-title>
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-light mb-2">
              Ingresa un logo que identifique a tu equipo (opcional)
            </h3>
            <span class="text-caption white--text text--darken-1">
              Bienvenido a HoluGaming
            </span>
          </v-card-text>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions v-if="!stateLoading">
        <v-btn :disabled="step === 1" text @click="step--"> Atras </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="stateBtn"
          color="primary"
          depressed
          @click="nextStep()"
          v-if="step < 3"
        >
          Siguiente
        </v-btn>
        <v-btn v-else color="success" depressed @click="suscribe()">
          Registrarme
        </v-btn>
      </v-card-actions>
      <v-progress-circular
        v-else
        indeterminate
        color="success"
      ></v-progress-circular>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  data: () => ({
    stateLoading: false,

    msgError: "",
    position: "top-right",
    indexItem: 0,
    imageName: "",
    imageUrl: "",
    imageFile: "",

    cantPlayersReplacements: 2,
    cantPlayers: 4,
    cantCaptain: 1,

    step: 1,
    players: [],
    firstNameRules: [(v) => !!v || "El nombre es requerido"],
    lastNameRules: [(v) => !!v || "El apellido es requerido"],
    nickNameRules: [(v) => !!v || "El nick es requerido"],
    dniNameRules: [(v) => !!v || "El documento de identidad es requerido"],
    phoneRules: [
      (v) =>
        (Number(v) !== 10 && Number(v) !== 20) ||
        "El númoero de telefono es requerido",
    ],
    emailRules: [
      (v) => !!v || "El Correo es requerido",
      (v) => /.+@.+/.test(v) || "El Correo es requerido",
    ],
    itemsRol: ["Capitan", "Jugador", "Sustituto"],
  }),
  props: ["visible"],
  computed: {
    getEndDate() {
      return this.dateNow.toISOString().slice(0, 10);
    },
    getYearMin() {
      var year = new Date(
        this.dateNow.getFullYear() - 1,
        this.dateNow.getMonth(),
        this.dateNow.getDate()
      );
      return year.toISOString().slice(0, 10);
    },
    stateBtn() {
      if (this.step === 1) {
        if (
          this.players.length !=
            this.cantCaptain +
              this.cantPlayers +
              this.cantPlayersReplacements ||
          !this.stateBtnStep1
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return !this.stateBtnStep2;
      }
    },
    stateBtnStep1() {
      let stateBtn = false;
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].first_name.length > 0) {
          if (this.players[i].last_name.length > 0) {
            if (this.players[i].nick_name.length > 0) {
              if (this.players[i].dni.length > 0) {
                if (this.players[i].phone_number.length > 0) {
                  if (this.players[i].email.length > 0) {
                    if (this.players[i].date_birth.length > 0) {
                      stateBtn = true;
                    } else {
                      stateBtn = false;
                      return stateBtn;
                    }
                  } else {
                    stateBtn = false;
                    return stateBtn;
                  }
                } else {
                  stateBtn = false;
                  return stateBtn;
                }
              } else {
                stateBtn = false;
                return stateBtn;
              }
            } else {
              stateBtn = false;
              return stateBtn;
            }
          } else {
            stateBtn = false;
            return stateBtn;
          }
        } else {
          stateBtn = false;
          return stateBtn;
        }
      }
      return stateBtn;
    },
    stateBtnStep2() {
      let stateBtn = false;
      let countCaptain = 0;
      let countPlayers = 0;
      let countReplacements = 0;
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].rol == "Capitan") {
          countCaptain++;
        }
        if (this.players[i].rol == "Jugador") {
          countPlayers++;
        }
        if (this.players[i].rol == "Sustituto") {
          countReplacements++;
        }
        if (countCaptain == this.cantCaptain) {
          if (countPlayers == this.cantPlayers) {
            if (countReplacements == this.cantPlayersReplacements) {
              stateBtn = true;
            }
          }
        }
      }
      return stateBtn;
    },
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Crear Jugadores";
        case 2:
          return "Ajustes de jugadores";
        default:
          return "Ajustes del equipo";
      }
    },
  },
  created() {
    this.addPlayer();
  },
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
    onFilePickedOne(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.players[this.indexItem].imageName = files[0].name;
        if (this.players[this.indexItem].imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.players[this.indexItem].imageUrl = fr.result;
          this.players[this.indexItem].imageFile = files[0];
        });
      } else {
        this.players[this.indexItem].imageName = "";
        this.players[this.indexItem].imageFile = "";
        this.players[this.indexItem].imageUrl = "";
      }
    },
    addPlayer() {
      this.players.push({
        first_name: "Moises",
        last_name: "Ochoa",
        nick_name: "moses22"+this.players.length,
        dni: "831292215LP"+this.players.length,
        phone_number: "7322735766"+this.players.length,
        email: "moi22sic.mo@gmail.com"+this.players.length,
        date_birth: "2022-05-04",
        menu: false,
        activePicker: null,
        rol: "",
        imageName: "",
        imageUrl: "",
        imageFile: "",
      });
      if (this.players.length > 1) {
        setTimeout(() => {
          document
            .getElementById("list-item-" + this.players.length)
            .scrollIntoView();
        }, 50);
      }
    },
    removePlayer() {
      this.players.pop();
    },
    validatePlayer() {},
    nextStep() {
      this.stateLoading = true;
      this.$http
        .post("players/verify", this.players)
        .then(() => {
          this.stateLoading = false;
          this.step++;
        })
        .catch((err) => {
          this.stateLoading = false;
          this.msgError = err.response.data.msg;
          this.addErrorNotification();
        });
    },
    suscribe() {
      console.log(this.players)
    },
  },
};
</script>
