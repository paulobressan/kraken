import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import routes, { namedRoutes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.config.globalProperties.$routes = namedRoutes;
app.use(router);
app.mount("#app");
