import Vue from "vue";
import App from "./App.vue";
import "./plugings/fontawesome";
import "./plugings/bootstrap";
Vue.config.productionTip = false;

import './sass/main.scss'

new Vue({
  render: h => h(App)
}).$mount("#app");
