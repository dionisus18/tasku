<template>
  <div>
    <v-navigation-drawer v-if="user.loggedIn" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> {{ title }} </v-list-item-title>
          <v-list-item-subtitle> menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="{ name: link.name }"
        >
          <v-list-item-icon> </v-list-item-icon>
          {{ link.showName }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        v-if="user.loggedIn"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-if="user.loggedIn" left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="indigo">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </v-avatar>
        </template>

        <v-list>
          <v-list-item key="profile" @click="() => {}">
            <v-list-item-title>{{ user.data.displayName }}</v-list-item-title>
          </v-list-item>
          <v-list-item key="logout" @click="signOut()">
            <v-list-item-title>Desconertarse</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data: () => ({
    drawer: false,
    links: [
      { showName: "Dashboard", name: "Dashboard" },
      //{ showName: "Realizar Tarea", name: "Home" },
      { showName: "Iniciar Sesion", name: "Login" },
      { showName: "Registrarse", name: "Register" },
    ],
    error: false,
  }),
  computed: {
    title() {
      return "TaskU";
    },
    ...mapGetters({ user: "user/user" }),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login",
          });
        });
    },
  },
};
</script>
