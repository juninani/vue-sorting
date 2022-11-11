import { RoutesString } from "@/components/modules/RoutesString";

import Home from "@/pages/Index.vue";
import Sort from "@/pages/sort/Index.vue";
import Err from "@/pages/err/Err.vue";
import Anime from "@/pages/animeJs/anime.vue";
import Lifecycle from "@/pages/lifecycleHooks/lifecycleHooks.vue";
//** route */

const pages = [
  {
    path: RoutesString.Home,
    component: Home,
    name: "home",
  },
  {
    path: RoutesString.Sort,
    component: Sort,
    name: "sort",
  },
  {
    path: RoutesString.Err,
    component: Err,
    name: "err",
  },
  {
    path: RoutesString.Anime,
    component: Anime,
    name: "anime",
  },
  {
    path: RoutesString.Lifecycle,
    component: Lifecycle,
    name: "Lifecycle",
  },
];

export default pages;
