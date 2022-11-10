import { createWebHistory, createRouter } from "vue-router";
import Pages from "./Pages";

const router = createRouter({
  history: createWebHistory(),
  // routes: [
  //   { path: "/", component: Sort },
  //   {
  //     path: "/:pathMatch(.*)",
  //     name: "not-found",
  //     component: Err,
  //   },
  // ],
  routes: Pages,
});

export default router;
