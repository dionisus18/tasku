import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp, firestore } from "firebase/app";
// import {  } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSE48_gMt2ha9ts8T_vFm_al_VHrtzNpc",
  authDomain: "tasku-7d985.firebaseapp.com",
  projectId: "tasku-7d985",
  storageBucket: "tasku-7d985.appspot.com",
  messagingSenderId: "338066373837",
  appId: "1:338066373837:web:48dea31da745377b873d84",
  measurementId: "G-9PBYM41X5C",
};
// Initialize Firebase
/* eslint-disable */
initializeApp(firebaseConfig);
/* eslint-disable */
// const analytics = getAnalytics(app);

/* eslint-disable */
export const { db } = firestore;

/* eslint-enable */
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
