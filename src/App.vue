<template>
  <v-app id="inspire">
    <NavBar />
    <v-main>
      <NotificationContainer />
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";
export default {
  components: {
    NavBar,
    NotificationContainer,
  },
};
</script>
