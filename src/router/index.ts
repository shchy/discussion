import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Discussions from "../views/Discussions.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Discussions,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Discussions,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
