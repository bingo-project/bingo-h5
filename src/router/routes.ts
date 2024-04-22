import Layout from "@/layout/index.vue";
import Pure from "@/layout/pure.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";
import { $t } from "@/locales";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "auth",
    component: Pure,
    redirect: { name: "Login" },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/auth/login.vue"),
        meta: {
          title: $t("auth.login"),
          noCache: true
        }
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/auth/register.vue"),
        meta: {
          title: $t("auth.register"),
          noCache: true
        }
      }
    ]
  },
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: $t("tabbar.home")
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: $t("tabbar.tools")
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: $t("tabbar.about"),
          noCache: true
        }
      },
      {
        path: "my",
        name: "My",
        component: () => import("@/views/my/index.vue"),
        meta: {
          title: $t("tabbar.my"),
          noCache: true
        }
      }
    ]
  }
];

export default routes;
