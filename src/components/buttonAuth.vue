<template >
  <v-btn rounded outlined text @click="dialogstate = true">
    <span class="mr-2">Iniciar Sesión</span>
    <dialogComponent :visible="dialogstate" @close="dialogstate = false" />
  </v-btn>
</template>
<script>
import dialogComponent from "../views/session/dialog.vue";

export default {
  components: {
    dialogComponent,
  },
  data: () => ({
    dialogstate: false,
  }),
};
</script>
