import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#E71D36',
        secondary: '#6c757d',
        success: '#0EBC73',
        // accent: '#3ea2fb',
        // error: '#dc3545',
        // petrol: '#17a499',
        background: "#07111E",
      },
    },
    dark: true,
  },
});
