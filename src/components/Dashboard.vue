<template>
  <v-card class="ma-5">
    <v-card-title>Dashboard</v-card-title>
    <v-card-text v-if="user">You are logged in!</v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.user.getters.user`
    ...mapGetters({
      user: "user/user",
    }),
  },
};
</script>
