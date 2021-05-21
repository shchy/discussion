import { createApp } from "vue";
import "@/normalize.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import authStore, { authStoreKey } from "./stores/auth";

library.add(faArrowUp);

createApp(App)
  .provide(authStoreKey, authStore())
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
