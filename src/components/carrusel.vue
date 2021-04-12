<template>
  <b-carousel
    controls
    indicators
    background="#ababab"
    img-width="1200"
    img-height="550"
    style="text-shadow: 1px 1px 2px #333;"
    :interval="4000"
  >
    <b-carousel-slide
      caption="Fortalece y potencia"
      text="tu carrera profesional."
      img-src="../assets/carrusel/b1.jpg"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Official Scrum Master"
      text="El entrenamiento más completo."
      img-src="../assets/carrusel/b2.jpg"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Necesitas renovar tus procesos"
      text="Unete, capacítate y forma parte del cambio."
      img-src="../assets/carrusel/b3.jpg"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "carrusel",
};
</script>

