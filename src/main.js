import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueQrcode from "vue-qrcode";
import Base64 from "js-base64";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Base64);
Vue.use(VueQrcode);
new Vue({
  render: h => h(App)
}).$mount("#app");
