import Vue from "vue";
import Router from "vue-router";
import { menu } from "@/menu.js";

Vue.use(Router);

// 暴力解决 NavigationDuplicated
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new Router({
  mode: "history",
  routes: menu,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
