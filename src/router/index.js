import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store.state.user.user;
  if (!user.loggedIn) {
    //Si el usuario no esta logeado y va a login o registro dejarlo pasar
    if (to.name === "Register" || to.name === "Login" || to.name === "Home") {
      next();
      //Si no, e intenta ir a otra ruta, entonces devolverlo al login (o home)
    } else {
      next({ name: "Home" });
    }
    //Si el usuario esta logueado dejarlo ir a cualquier ruta
  } else {
    //Excepto si quiere ir al login devolverlo de donde vino (puede causar problemas, necesita testing, lo mejor es mandarlo al home)
    if (to.name === "Login" || to.name === "Register" || to.name === "Home") {
      next({ name: from.name });
    }
    next();
  }
});

export default router;
