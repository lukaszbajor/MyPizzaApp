import { createRouter, createWebHistory } from "vue-router";

import MainContent from "./pages/MainContent.vue";
import LoginView from "./pages/LoginView.vue";
import RegisterView from "./pages/RegisterView.vue";
import SettingsView from "./pages/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainContent,
      children: [
        {
          path: "/pizza/:id/details",
          component: null,
        },
      ],
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/order:id",
      component: null,
    },
    {
      path: "/settings",
      component: SettingsView,
    },
    {
      path: "/:notFound(.*)",
      component: null,
    },
  ],
});

export default router;
