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
            <v-list-item-title class="title">Holu</v-list-item-title>
            <v-list-item-subtitle>eSports</v-list-item-subtitle>
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
        <auth/>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15 pt-2 pb-2"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img
          src="../assets/images/holulogo.png"
          max-width="180px"
          @click="$vuetify.goTo('#hero')"
        />
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
        <auth/>
      </div>
      <dialogComponent :visible="dialogstate" @close="dialogstate = false" />
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import dialogComponent from "../views/session/dialog.vue";
import auth from "./buttonAuth.vue";
export default {
  components: {
    dialogComponent,
    auth
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
    dialogstate: false,
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