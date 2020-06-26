import Vue from "vue";
import App from "./App.vue";
import router from "./utils/router";
import store from "./store";

// Google Analytics
import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-78734040-15",
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
});

// Sentry
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
Sentry.init({
  dsn:
    "https://66aab7eb317a48b8a477e51d3236b5be@o406700.ingest.sentry.io/5294656",
  release: process.env.NODE_ENV + "@" + require("../package.json").version,
  environment: process.env.NODE_ENV,
  integrations: [new VueIntegration({ Vue, attachProps: true })]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
