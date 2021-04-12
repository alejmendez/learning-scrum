<template>
  <div id="app">
    <Menu />
    <Carrusel />
    <Cursos />
    <Filosofia />
    <Porque />
    <Team />
    <Aibes />
    <Formulario />
    <FooterPage />
  </div>
</template>

<script>
import Menu from "@/components/nav.vue";
import Carrusel from "@/components/carrusel.vue";
import Cursos from "@/components/cursos.vue";
import Filosofia from "@/components/filosofia.vue";
import Porque from "@/components/porque.vue";
import Team from "@/components/team.vue";
import Aibes from "./components/aibes.vue";
import FooterPage from "@/components/FooterPage.vue";
import Formulario from './components/formulario.vue';

const WOW = require("wow.js/dist/wow.js");
let wow = new WOW();

export default {
  name: "app",
  components: {
    Menu,
    Carrusel,
    Cursos,
    Porque,
    Filosofia,
    Team,
    Aibes,
    FooterPage,
    Formulario
  },
  mounted() {
    wow.init();
  }
};
</script>
