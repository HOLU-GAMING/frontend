<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <v-text-field
          class="pa-md-4 mx-lg-auto"
          label="Nombres"
          :rules="firstNameRules"
          required
          v-model="credentials.first_name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          class="pa-md-4 mx-lg-auto"
          label="Apellidos"
          :rules="lastNameRules"
          required
          v-model="credentials.last_name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          class="pa-md-4 mx-lg-auto"
          label="Nick"
          :rules="nickNameRules"
          required
          v-model="credentials.nick_name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          class="pa-md-4 mx-lg-auto"
          label="CI"
          :rules="dniNameRules"
          required
          v-model="credentials.dni"
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
          v-model="credentials.phone_number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          class="pa-md-4 mx-lg-auto"
          label="Correo"
          :rules="emailRules"
          required
          v-model="credentials.email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-menu
          ref="menu"
          v-model="credentials.menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="credentials.date_birth"
              label="Fecha de nacimiento"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="credentials.date_birth"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="$refs.menu.save(credentials.activePicker)"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data: () => ({
    show1: "",
    valid: true,
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
  }),
  props: ["infoData"],
  computed:{
    credentials(){
      return this.infoData;
    },
  },
};
</script>
  