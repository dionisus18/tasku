<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
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
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
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
  },
};
</script>
