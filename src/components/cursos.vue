<template>
  <div id="cursos">
    <div class="section">
      <div class="container fadeInUp wow" data-wow-duration="0.5s">
        <h3>Cursos de Scrum, agilidad e imnovación</h3>
        <div class="line bg-primary mb-5"></div>

        <b-row cols="1" cols-md="2" cols-lg="3">
          <b-col>
            <b-card class="mb-3 h-100">
            <b-card-text>
              <div class="text-center">
                <b-img
                  src="../assets/cursos/lssm.png"
                  rounded="circle"
                  alt="lssm"
                  width="100"
                  class="my-3"
                ></b-img>
                <h4 class="p-2">Scrum Master</h4>
              </div>
              <div>
                En este curso aprenderás de una manera práctica los contenidos, los roles, eventos y artefactos propios de Scrum. Entrenamiento con opción a presentar exámen de certificación. <small>Duración: 16h</small><br>
                  <small> <s>Valor:300$</s></small><br>
                <b>Oferta: 250$</b> <br><br>
              </div>
              <b-button class="mt-3" block variant= "primary">Inscríbete aquí</b-button>
            </b-card-text>
          </b-card>
          </b-col>

          <b-col>
            <b-card class="mb-3 h-100">
            <b-card-text>
              <div class="text-center">
                <b-img
                  src="../assets/cursos/lsfs.png"
                  rounded="circle"
                  alt="lsfs"
                  width="100"
                  class="my-3"
                ></b-img>
                <h4 class="p-2">Fundamentos de Scrum</h4>
              </div>
              <div>
                Este curso está orientado a todo aquel que desee obtener los conocimientos
                básicos para trabajar en organizaciones con culturas ágiles.
                Entrenamiento con opción a presentar exámen de certificación.<small> Duración: 4h</small><br>
                <small> <s>Valor:$</s></small><br>
                <b>Oferta: 30$</b>
              </div>
              <b-button class="mt-3" block variant= "primary">Inscríbete aquí</b-button>
            </b-card-text>
          </b-card>
          </b-col>

          <b-col>
            <b-card class="mb-3 h-100">
            <b-card-text>
              <div class="text-center">
                <b-img
                  src="../assets/cursos/lsac.png"
                  rounded="circle"
                  alt="lsac"
                  width="100"
                  class="my-3"
                ></b-img>
                <h4 class="p-2">Official Agile Coach</h4>
              </div>
              <div>
                El programa Official Agile Coach es el único que te capacita
                para convertirte en un Experto Agile con liderazgo y
                conocimiento para ejecutar los procesos Lean-Agile en cualquier
                organización. <small>Duración: 180h</small><br>
                <small> <s>Valor:300$</s></small><br>
                <b>Oferta: 1.500$</b>
              </div>
              <b-button class="mt-3" block variant= "primary">Inscríbete aquí</b-button>
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
  name: "Cursos",
};
</script>
