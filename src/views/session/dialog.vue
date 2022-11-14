<template>
  <v-dialog v-model="show" max-width="500">
    <v-card flat color="background">
      <v-card-title class="text-h5">
        {{
          state == "login"
            ? "INICIAR SESIÓN"
            : state == "create"
            ? "CREAR UNA NUEVA CUENTA"
            : state == "code"
            ? "VERIFICACIÓN DE CORREO"
            : "ACTUALIZAR CONTRASEÑA"
        }}
      </v-card-title>
      <form
        ref="form"
        @submit.prevent="createAccount"
        :v-model="valid"
        lazy-validation
      >
        <v-card-text>
          <login v-if="state == 'login'" :infoData="credentials" />
          <create v-if="state == 'create'" :infoData="credentials" />
          <codeComponent v-if="state == 'code'" :infoData="credentials" />
          <forgotPassword v-if="state == 'forgot'" :infoData="credentials" />
        </v-card-text>
        <v-card-actions v-if="state == 'login'">
          <v-spacer></v-spacer>
          <v-btn color="primary" dark rounded type="submit" plain>
            Olvidé mi contraseña
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark rounded type="submit">
            {{
              state == "login"
                ? "Iniciar Sesión"
                : state == "create"
                ? "Crear mi cuenta"
                : state == "code"
                ? "Enviar codigo"
                : "Cambiar contraseña"
            }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </form>
      <v-card-actions v-if="state == 'login'">
        <v-spacer></v-spacer>
        ¿Aún no tienes una cuenta?
        <v-btn
          color="primary"
          dark
          rounded
          type="submit"
          plain
          @click="state = 'create'"
        >
          Unirme
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
      <v-card-actions v-if="state == 'create'">
        <v-spacer></v-spacer>
        Ya tengo una cuenta
        <v-btn
          color="primary"
          dark
          rounded
          type="submit"
          plain
          @click="state = 'login'"
        >
          Loguearme
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import login from "./login.vue";
import create from "./createAccount.vue";
import codeComponent from "./code.vue";
import forgotPassword from "./forgotPassword.vue";
export default {
  components: {
    login,
    create,
    codeComponent,
    forgotPassword,
  },
  data: () => ({
    stateLoading: false,
    show1: "",
    valid: true,
    state: "login",
    message: "",
    position: "top-right",
    credentials: {
      id: "",
      first_name: "",
      last_name: "",
      nick_name: "",
      dni: "",
      phone_number: "",
      password: "",
      email: "",
      menu: false,
      date_birth: "",
      activePicker: "",
      code: "",
      remember: "",
    },
  }),
  props: ["visible"],
  computed: {
    ...mapGetters({
      token: "auth/token",
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
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
  },
  created() {},
  mounted() {},
  methods: {
    createAccount() {
      console.log(this.state);
      switch (this.state) {
        case "login":
          return this.auth();
        case "create":
          return this.registerAccount();
        case "code":
          return this.sendCode();
        case "forgot":
          return this.updatePassword();
        default:
          break;
      }
    },
    auth() {
      let body = {
        nick_name: this.credentials.nick_name,
        password: this.credentials.password,
      };
      this.$http
        .post("players/auth/", body)
        .then((res) => {
          console.log(res);
          this.stateLoading = false;
          // this.state = 'forgot';
          this.message = res.data.msg;
          this.successNotification();
        })
        .catch((err) => {
          console.log(err);
          this.stateLoading = false;
          console.log(err.response.data.msg);
          this.message = err.response.data.msg;
          this.addErrorNotification();
        });
    },
    registerAccount() {
      let body = {
        dni: this.credentials.dni,
        first_name: this.credentials.first_name,
        last_name: this.credentials.last_name,
        nick_name: this.credentials.nick_name,
        date_birth: this.credentials.date_birth,
        phone_number: this.credentials.phone_number,
        email: this.credentials.email,
      };
      console.log(body);
      this.$http
        .post("players/register", body)
        .then((res) => {
          console.log(res);
          this.stateLoading = false;
          this.state = "code";
          this.message = res.data.msg;
          this.addWarningNotification();
          this.credentials.id = res.data.player.id;
        })
        .catch((err) => {
          console.log(err);
          this.stateLoading = false;
          console.log(err.response.data.errors[0].msg);
          this.message = err.response.data.errors[0].msg;

          this.addErrorNotification();
        });
    },
    sendCode() {
      let body = {
        code: this.credentials.code,
      };
      this.$http
        .post("players/validate/" + this.credentials.id, body)
        .then((res) => {
          console.log(res);
          this.stateLoading = false;
          this.state = "forgot";
          this.message = res.data.msg;
          this.successNotification();
        })
        .catch((err) => {
          console.log(err);
          this.stateLoading = false;
          console.log(err.response.data.msg);
          this.message = err.response.data.msg;
          this.addErrorNotification();
        });
    },
    updatePassword() {
      let body = {
        code: this.credentials.code,
        password: this.credentials.password,
      };
      this.$http
        .post("players/change/password/" + this.credentials.id, body)
        .then((res) => {
          console.log(res);
          this.stateLoading = false;
          this.state = "login";
          this.message = res.data.msg;
          this.successNotification();
        })
        .catch((err) => {
          console.log(err);
          this.stateLoading = false;
          console.log(err.response.data.msg);
          this.message = err.response.data.msg;
          this.addErrorNotification();
        });
    },
    successNotification() {
      this.$toast.success(this.message, {
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
    addErrorNotification() {
      this.$toast.error(this.message, {
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
    addWarningNotification() {
      this.$toast.warning(this.message, {
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
  },
};
</script>
