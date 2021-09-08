<template>
  <div>
    <v-alert v-if="error" dense type="error">
      {{ error }}
    </v-alert>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="form.name"
        label="Nombre"
        :class="'pt-4'"
        :rules="nameRules"
        required
      >
        <v-icon slot="prepend" color="secondary"> mdi-account </v-icon>
      </v-text-field>

      <v-text-field
        v-model="form.email"
        :rules="emailRules"
        label="Email"
        :class="'pt-4'"
        required
      >
        <v-icon slot="prepend" color="secondary"> mdi-email </v-icon>
      </v-text-field>

      <v-text-field
        v-model="form.password"
        :rules="passRules"
        label="Contraseña"
        type="password"
        required
      >
        <v-icon slot="prepend" color="secondary"> mdi-lock </v-icon>
      </v-text-field>
      <a href="#">¿Has olvidado tu contraseña?</a>
      <v-btn
        class="mt-4 black white--text py-8 rounded-pill"
        @click="signUp"
        width="100%"
      >
        Crear cuenta TaskU
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
      name: "",
      email: "",
      password: "",
    },
    nameRules: [
      (v) => !!v || "Nombre es requerido",
      (v) =>
        (v && v.length <= 15) || "Nombre debe tener menos de 15 caracteres",
    ],
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe de ser valido",
    ],
    passRules: [
      (v) => !!v || "Contraseña es requerida",
      (v) =>
        (v && v.length <= 8) || "Contraseña debe tener menos de 8 caracteres",
    ],
  }),

  methods: {
    signUp() {
      this.$refs.form.validate();
      if (this.valid) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then((data) => {
            data.user
              .updateProfile({
                displayName: this.form.name,
              })
              .then(() => {});
          })
          .catch((err) => {
            this.error = err.message;
          });
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
