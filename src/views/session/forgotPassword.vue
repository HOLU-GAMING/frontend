<template>
  <div>
    <v-text-field
      v-model="credentials.password"
      :rules="passwordRules"
      label="Contraseña"
      required
      prepend-icon="mdi-lock"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye'"
      :type="show1 ? 'text' : 'password'"
      data-vv-name="pass"
      name="input-10-1"
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-text-field
      v-model="credentials.remember"
      :rules="passwordRules"
      label="Contraseña"
      required
      prepend-icon="mdi-lock"
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye'"
      :type="show2 ? 'text' : 'password'"
      data-vv-name="pass"
      name="input-10-1"
      @click:append="show2 = !show2"
    ></v-text-field>
  </div>
</template>
      
<script>
export default {
  data: () => ({
    show1: "",
    show2: "",
    valid: true,
    userRules: [
      (v) => !!v || "La cuenta de usuario es necesario para iniciar sesión",
    ],
    passwordRules: [
      (v) => !!v || "La contraseña es requerido para iniciar sessión",
    ],
  }),
  props: ["infoData"],
  computed: {
    credentials() {
      return this.infoData;
    },
  },
};
</script>
      