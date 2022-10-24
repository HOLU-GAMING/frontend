<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="../assets/images/gaming.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="../assets/images/holulogo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">HOLU</v-list-item-title>
            <v-list-item-subtitle>GAMING</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="../assets/images/holulogo.png" max-width="200px" @click="$vuetify.goTo('#hero')"/>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <!-- <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Home</span>
        </v-btn> -->
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">Torneos</span>
        </v-btn>
        <!-- <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">Descarga</span>
        </v-btn> -->
        <v-btn text @click="$vuetify.goTo('#pricing')">
          <span class="mr-2">Gana</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contactanos</span>
        </v-btn>
        <v-btn rounded outlined text @click="dialogLogin = true">
          <span class="mr-2">Iniciar Sesión</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-dialog v-model="dialogLogin" max-width="500">
      <v-card flat color="background">
        <form
          ref="form"
          @submit.prevent="senduser"
          :v-model="valid"
          lazy-validation
        >
          <v-card-text>
            <v-text-field
              v-model="login.user"
              :rules="[
                () =>
                  !!login.user ||
                  'La cuenta de usuario es necesario para iniciar sesión',
              ]"
              label="Cuenta de usuario"
              required
              prepend-icon="mdi-account"
            ></v-text-field>
            <v-card-text>
              <v-text-field
                v-model="login.password"
                :rules="[
                  () =>
                    !!login.password ||
                    'La contraseña es requerido para iniciar sessión',
                ]"
                label="Contraseña"
                required
                prepend-icon="mdi-lock"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye'"
                :type="show1 ? 'text' : 'password'"
                data-vv-name="pass"
                name="input-10-1"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-card-text>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- {{token}} -->
            <!-- {{authenticated}} -->
            <!-- {{user}} -->
            <v-btn color="primary" dark rounded type="submit">
              Iniciar sesión
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <facebook-login
              appId="286813975656766"
              @login="onLogin"
              @logout="onLogout"
              @sdk-loaded="sdkLoaded"
            >
            </facebook-login>
            <v-spacer></v-spacer>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// import facebookLogin from "./fb/facebook-login";
// import axios from "axios";
// import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";
// import jwt_decode from 'jwt-decode';
// import firebase from "firebase/app";

// import "firebase/auth";
export default {
  components: {
    // facebookLogin,
    // VueTelInputVuetify,
  },
  data: () => ({
    verificationId: "",
    show1: "",
    valid: true,
    indexLogin: 0,
    isConnected: false,
    FB: undefined,
    listGender: ["masculino", "femenino"],
    tab: null,
    itemss: ["Estudiante", "Administrador"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dialogLogin: false,
    drawer: null,
    isXs: false,
    items: [
      // ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "TORNEOS", "#features"],
      // ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "GANA", "#pricing"],
      ["mdi-email-outline", "CONTACTANOS", "#contact"],
    ],
    login: {
      name: "",
      user: "",
      password: "",
      password_confirm: "",
      usr_token: "",
    },
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  computed: {
    ...mapGetters({
      token: "auth/token",
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    backTab() {
      this.indexLogin = 0;
    },
    countryChanged(country) {
      this.student.cus_code_phone = country.dialCode;
    },
    uppercase() {},
    getCurrentDate() {},
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    ...mapActions({
      signIn: "auth/signIn",
    }),
    senduser() {},
    sendCustomer() {},
    sendCode() {},
    getCustomerData() {},
    createAccount() {},

    onLogin() {},
    onLogout() {},
    sdkLoaded(payload) {},
  },
  created() {},
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<!-- <style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style> -->