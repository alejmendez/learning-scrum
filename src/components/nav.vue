<template>
  <div id="nav">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
        <img
          class="d-inline-block align-top pl-3"
          src="../assets/logo.svg"
          alt="LearningScrum"
          width="160"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-item class="acreditada"> Institución avalada por la <br>
          Asociación Iberoamericana de Scrum</b-navbar-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#inicio">Inicio</b-nav-item>
            <b-nav-item href="#cursos">Cursos</b-nav-item>
            <b-nav-item href="#team">Team</b-nav-item>
            <b-nav-item href="#footer">Contacto</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.acreditada{
  line-height: 1;
  border-left: 1px solid #e6e6e6;
  padding-left: 0.9rem;
}
</style>

<script>
export default {
  name: "Menu",
};
</script>
