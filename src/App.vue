<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item >
          <v-list-item-icon>Tareas </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <sign-up></sign-up>
      <router-link to="/" ></router-link>
    </v-main>
  </v-app>
</template>

<script>
import Signup from "./components/Signup.vue";

export default {
  data: () => ({
    drawer: true,
    links: ["Dashboard", "Realizar Tarea", "Profile", "Updates"],
    error: false,
  }),
  components: {
    "sign-up": Signup,
  },
};
</script>
