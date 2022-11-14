<template>
  <div>
    Se envió un codigo de verificación a su correo
    <v-text-field
      v-model="credentials.code"
      :rules="codeRules"
      label="Código"
      required
      prepend-icon="mdi-account"
    ></v-text-field>
    ¿No te llegó?
  </div>
</template>
<script>

export default {
  components: {},
  data: () => ({
    show1: "",
    valid: true,
    codeRules: [
      (v) => !!v || "La contraseña es requerido para iniciar sessión",
    ],
  }),
  props: ["infoData"],
  computed:{
    credentials(){
      return this.infoData;
    },
  },
};
</script>
      