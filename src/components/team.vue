<template>
  <div id="team">
    <div class="section ligth">
      <div class="container fadeInUp wow" data-wow-duration="0.5s">
        <h3>Nuestro equipo directivo</h3>
        <div class="line bg-primary mb-5"></div>

        <b-row align-h="around" class="mb-4">
          <b-col cols="4">
            <b-card>
            <b-card-text class="text-center">
              <b-img
                src="../assets/team/betancourt.jpg"
                v-bind="mainProps"
                rounded="circle"
                alt="Antonio Betancourt"
              ></b-img>

              <h3>Antonio Betancourt</h3>
              <h5>Trainer Agile</h5>
              Ingeniero en Sistema, con amplia experiencia en educación universitaria, con Cerificación en Scrum Master, Agile Coach, Disciplined Agile instructor.
            </b-card-text>
          </b-card>
          </b-col>
          <b-col cols="4">
            <b-card>
            <b-card-text class="text-center">
              <b-img
                src="../assets/team/campora.jpg"
                v-bind="mainProps"
                rounded="circle"
                alt="María Campora"
              ></b-img>

              <h3>María Campora</h3>
              <h5>Diseñadora UX/UI</h5>
              Diseñador UX con experiencia en organizaciones con cultura ágile, diseño de productos, user interfaz, programador frontend. 
            </b-card-text>
          </b-card>
          </b-col>
        </b-row>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Team",
  data() {
    return {
      mainProps: {
        // blank: true,
        // blankColor: "#777",
        width: 150,
        height: 150,
        class: "m2",
      },
    };
  },
};
</script>
