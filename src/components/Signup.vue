<template>
<v-card class="ma-5">
  <v-sheet>
    <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
     <v-text-field
        v-model="name"
        :counter="15"
        label="nombre"
        :class="'pt-4'"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :counter="10"
        :rules="emailRules"
        label="email"
        :class="'pt-4'"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        type="password"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="signUp">
        Singup
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </v-sheet>
</v-card>
</template>
<script>


export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    password: "",
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    signUp() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
      });
      this.$router.push('/about')
    },
    onSigninGoogle() {
      this.$store.dispatch("signUserInGoogle");
    },
  },
};
</script>
