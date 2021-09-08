<template>
  <div>
    <v-alert v-if="error" dense type="error">
      {{ error }}
    </v-alert>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="form.email"
        :counter="10"
        :rules="emailRules"
        label="Email"
        required
      >
        <v-icon slot="prepend" color="secondary"> mdi-email </v-icon>
      </v-text-field>

      <v-text-field
        v-model="form.password"
        :rules="passwordRules"
        label="Contraseña"
        type="password"
        required
      >
        <v-icon slot="prepend" color="secondary"> mdi-lock </v-icon>
      </v-text-field>
      <a href="#">¿Has olvidado tu contraseña?</a>
      <v-btn
        class="mt-4 black white--text py-8 rounded-pill"
        @click="login"
        width="100%"
      >
        Iniciar sesión con TaskU
      </v-btn>
    </v-form>
  </div>
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
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail no es valido",
    ],
    passwordRules: [(v) => !!v || "Contraseña es requerida"],
  }),

  methods: {
    login() {
      this.$refs.form.validate();
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
<style lang="css" scoped>
.v-btn {
  text-transform: none;
}
</style>
