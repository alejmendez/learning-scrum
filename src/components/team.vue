<template>
  <div id="team">
    <div class="section ligth">
      <div class="container fadeInUp wow" data-wow-duration="0.5s">
        <h3>Nuestro equipo directivo</h3>
        <div class="line bg-primary mb-5"></div>

        <b-row cols="1" cols-md="2" align-h="around" class="mb-4">
          <b-col>
            <b-card class="mb-3">
            <b-card-text class="text-center">
              <b-img
                src="../assets/team/betancourt.jpg"
                v-bind="mainProps"
                rounded="circle"
                alt="Antonio Betancourt"
              ></b-img>

              <h4 class="mt-3">Antonio Betancourt</h4>
              <h5>Fundador | Trainer </h5>
              M.Sc Gerencia informática, ingeniero de sistemas, profesor universitario, agile coach, scrum master, disciplined agile instructor 
            </b-card-text>
          </b-card>
          </b-col>
          <b-col>
            <b-card class="mb-3">
            <b-card-text class="text-center">
              <b-img
                src="../assets/team/campora.jpg"
                v-bind="mainProps"
                rounded="circle"
                alt="María Campora"
              ></b-img>

              <h4 class="mt-3">María Campora</h4>
              <h5>Fundador | Diseñador UX/UI</h5>
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
