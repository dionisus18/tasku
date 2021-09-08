<template>
  <v-container class="cyan lighten-5 h100 p0" fluid>
    <v-row no-gutters class="h100">
      <v-col sm="6">
        <v-container class="px-10" fluid>
          <div class="text-h2 pt-8 pb-6 display">
            La manera mas simple de ofrecer <span>grandes servicios</span>
          </div>
          <div class="text-body">
            Publica o realiza servicios bajo tus terminos con <span>TaskU</span>
          </div>
          <img
            id="display-image"
            class="rounded-lg"
            alt="demostracion de realizacion de actividad"
            src="@/assets/task-painting.jpg"
          />
        </v-container>
      </v-col>
      <v-col class="white" sm="6">
        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-col>
              <div class="mx-auto text-center" style="width: 300px">
                <div class="text-h2 py-6">TaskU</div>
                <v-tabs class="text-caption py-2">
                  <v-tab>Iniciar Sesión</v-tab>
                  <v-tab-item><Login /></v-tab-item>
                  <v-tab>Registrarse</v-tab>
                  <v-tab-item><Register /></v-tab-item>
                </v-tabs>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
export default {
  components: {
    Login,
    Register,
  },
  data: () => ({
    login: true,
  }),
};
</script>
<style lang="css" scoped>
.h100 {
  height: 100%;
}
.p0 {
  padding: 0;
}
.display {
  font-weight: 100;
}
.display span {
  font-weight: 300;
}
#display-image {
  max-height: 50vh;
  margin: 60px 0 0 60px;
}
</style>
