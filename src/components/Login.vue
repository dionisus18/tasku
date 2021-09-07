<template>
  <v-card class="ma-5">
    <v-sheet>
      <v-alert v-if="error" dense type="error">
        {{ error }}
      </v-alert>
      <v-form ref="form" v-model="valid" class="pa-4">
        <v-text-field
          v-model="form.email"
          :counter="10"
          :rules="emailRules"
          label="email"
          :class="'pt-4'"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          :rules="passwordRules"
          label="password"
          type="password"
          required
        ></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
          Login
        </v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>
<script>
import firebase from "firebase";

export default {
  data: () => ({
    valid: false,
    error: "",
    form: {
      email: "",
      password: "",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "E-mail is required"],
  }),

  methods: {
    login() {
      if (this.valid) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            // Aca hay un problema de asincronismo, pero no se como esperar la segunda llamada,
            // hay dos soluciones, la documentada que es llamar al fetchUser antes del route
            // pero se llamaria dos veces seguidas por el watch de firebase, y la otra es un timeout
            // para que por detras asegurarnos de manera superficial que se actualize el state y asi hacer el route
            // ninguna de las dos soluciones me parecen mejor, pero el timeout por lo menos no repite las llamadas al
            // state de vuex
            //this.$store.dispatch("user/fetchUser", data);
            setTimeout(() => {
              this.$router.replace({ name: "Dashboard" });
            }, 1000);
          })
          .catch((err) => {
            this.error = err.message;
          });
        //this.$router.push("/dashboard");
      }
    },
  },
};
</script>
