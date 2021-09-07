<template>
  <v-card class="ma-5">
    <v-sheet>
      <v-form ref="form" v-model="valid" class="pa-4">
        <v-text-field
          v-model="form.name"
          :counter="15"
          label="nombre"
          :class="'pt-4'"
          required
        ></v-text-field>

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
          label="password"
          type="password"
          required
        ></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="signUp">
          Singup
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
    form: {
      name: "",
      email: "",
      password: "",
    },
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    signUp() {
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
