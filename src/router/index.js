import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFoundComponent from "../views/NorFoundComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
