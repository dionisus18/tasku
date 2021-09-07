import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
import Signup from "../components/Signup.vue";
import Home from "../views/Home.vue";
import { store } from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register2",
    name: "Register2",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store.state.user.user;
  if (to.name !== "Login" && !user.loggedIn) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
