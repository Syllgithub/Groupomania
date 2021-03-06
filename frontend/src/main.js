import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue3-cookies";

createApp(App)
  .use(router)
  .use(VueCookies, {
    expireTimes: "1d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  })
  .mount("#app");
