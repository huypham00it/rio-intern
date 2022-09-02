import Vue from "vue";
import VueRouter from "vue-router";
import VueCarousel from "vue-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import HighchartsVue from "highcharts-vue";

import App from "./App.vue";
import routes from "./routes";
import "./assets/tailwind.css";
import "./validations/vee-validate";
import store from "./store";

library.add(faSearch, faAngleDown, faAngleUp);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

Vue.use(HighchartsVue);
Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#5b3cc4",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)",
    },
  },
});

router.afterEach((to) => {
  const DEFAULT_TITLE = "Hyperlead";
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
