import Vue from "vue";
import Vuex from "vuex";
//import user from "./user";
import shared from "./shared";
import * as notification from "@/store/modules/notification.js";
import * as user from "@/store/modules/user.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    shared: shared,
    notification,
  },
});
