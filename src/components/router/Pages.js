import { RoutesString } from "@/components/modules/RoutesString";

import Home from "@/pages/Index.vue";
import Sort from "@/pages/sort/Index.vue";
import Err from "@/pages/err/Err.vue";
import Anime from "@/pages/animeJs/anime.vue";
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
];

export default pages;
