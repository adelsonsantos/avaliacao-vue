import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import money from 'v-money';


Vue.use(PaperDashboard);


Vue.use(money, {precision: 2,decimal: ',', thousands: '.', prefix: 'R$ ',
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
