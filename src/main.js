import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

import * as firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBSE48_gMt2ha9ts8T_vFm_al_VHrtzNpc",
  authDomain: "tasku-7d985.firebaseapp.com",
  projectId: "tasku-7d985",
  storageBucket: "tasku-7d985.appspot.com",
  messagingSenderId: "338066373837",
  appId: "1:338066373837:web:48dea31da745377b873d84",
  measurementId: "G-9PBYM41X5C",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("user/fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
