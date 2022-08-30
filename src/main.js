import Vue from "vue";
import VueRouter from "vue-router";
import VueCarousel from "vue-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ValidationObserver, ValidationProvider } from "vee-validate";

import App from "./App.vue";
import routes from "./routes";
import "./assets/tailwind.css";
import "./validations/vee-validate";

Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

library.add(faSearch);

const router = new VueRouter({
  routes,
  mode: "history",
});

const DEFAULT_TITLE = "Hyperlead";
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
