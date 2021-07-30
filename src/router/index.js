import Vue from "vue";
import VueRouter from "vue-router";

// importing all here, since it is a little project
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-library",
    name: "Library",
    component: Library,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
