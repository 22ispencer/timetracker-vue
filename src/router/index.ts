import { createWebHistory, createRouter } from "vue-router";
import SignInView from "../components/SignInView.vue";
import ClockingView from "../components/ClockingView.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/Clocking",
    name: "Clocking",
    component: ClockingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
