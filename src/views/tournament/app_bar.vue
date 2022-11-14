<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="../../assets/images/gaming.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="../../assets/images/holulogo.png" alt="Logo" />
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

    <v-app-bar absolute elevate-on-scroll :color="color" dark>
      <v-toolbar-title>
        <v-img
          src="../../assets/images/holulogo.png"
          max-width="100px"
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
        <v-btn rounded outlined text @click="dialogstate = true">
          <span class="mr-2">Iniciar Sesión</span>
        </v-btn>
      </div>
      <dialogComponent :visible="dialogstate" @close="dialogstate = false" />
    </v-app-bar>
  </div>
</template>
  
  <script>
import { mapActions, mapGetters } from "vuex";
import dialogComponent from "../session/dialog.vue";

export default {
  components: {
    dialogComponent,
  },
  data: () => ({
    verificationId: "",
    show1: "",
    valid: true,
    indexLogin: 0,
    isConnected: false,
    tab: null,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dialogstate: false,
    drawer: null,
    isXs: false,
    items: [
      ["mdi-information-outline", "TORNEOS", "#features"],
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