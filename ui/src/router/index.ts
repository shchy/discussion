import { h } from "vue";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";
import Discussions from "../views/Discussions.vue";
import Discussion from "../views/Discussion.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Discussions,
  },
  {
    path: "/category/:categoryID",
    name: "Category",
    component: { render: () => h(RouterView) },
    children: [
      {
        path: "",
        name: "Discussions",
        component: Discussions,
      },
      {
        path: "discuttion/:id",
        name: "Discussion",
        component: Discussion,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
