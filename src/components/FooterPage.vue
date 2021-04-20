<template>
  <div id="footer">
    <div class="contacto">
      <div
        class="container fadeInUp wow"
        data-wow-duration="0.5s"
      >
          <b-row cols="1" cols-md="2">
          <b-col class="mb-3">
            <img class="logo-f"
            alt="LearningScrum" 
            src="../assets/logo-ls-w.svg"
            width="200" />
            <p class="mt-3">
              Ser Ágiles, Being Agile, trata sobre “quiénes somos” y sobre seguir unos principios y valores con plena consciencia. Tiene que ver con la cultura organizacional y la mentalidad del equipo, y con cómo nos percibimos, cómo nos relacionamos, qué valoramos y cómo nos comportamos.

            </p>
          </b-col>        
          
          
          <b-col class="text-right mb-3">
            <h5>Contáctanos:</h5>
            <a href="tel:+56920904970">+56 9 2090 4970</a> <br><br>
            <a href="mailto:etd.spa@gmail.com">
              <span class="pr-2"> <font-awesome-icon icon="envelope"/></span>
              etd.spa@gmail.com
            </a> <br><br>
            <h5>Síguenos:</h5>
            <div class="d-block">

              <a href="https://www.linkedin.com/in/learning-scrum-98202620b/" 
              class="mr-2"
              target="_blank" 
              rel="noopener noreferrer">
                <img class="rounded shadow"
                alt="LearningScrum" 
                src="../assets/rrss/linkedin.svg"
                width="30" />
              </a>

              <a href="https://www.facebook.com/Learning-scrum-111047601084041/?ref=page_internal" 
              class="mr-2"
              target="_blank" 
              rel="noopener noreferrer">
                <img class="rounded shadow"
                alt="LearningScrum" 
                src="../assets/rrss/facebook.svg"
                width="30" />
              </a>

              <a href="https://www.instagram.com/LearningScrum/" 
              class="mr-2"
              target="_blank" 
              rel="noopener noreferrer">
                <img class="rounded shadow"
                alt="LearningScrum" 
                src="../assets/rrss/instagram.svg"
                width="30" />
              </a>

              <a href="https://twitter.com/ScrumLearning" 
              class="mr-2"
              target="_blank" 
              rel="noopener noreferrer">
                <img class="rounded shadow"
                alt="LearningScrum" 
                src="../assets/rrss/twitter.svg"
                width="30" />
              </a>

               <a href="https://www.youtube.com/channel/UCPKjnXSWI1qR-af967U6inw/featured" 
              class="mr-2"
              target="_blank" 
              rel="noopener noreferrer">
                <img class="rounded shadow"
                alt="LearningScrum" 
                src="../assets/rrss/youtube.svg"
                width="30" />
              </a>

            </div>
          </b-col>    
        </b-row>
      </div>
    </div>

    <div class="bar-bottom">Todos los derechos reservados 2021.</div>
  </div>
</template>
<style lang="scss">
#footer {
  .contacto {
    background: #363636;
    color: white;
    padding: 40px 0 30px 0;
  }
  .logo-f {
    height: 80px;
  }
  .bar-bottom {
    background: black;
    text-align: center;
    color: white;
    padding: 20px 0;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #fcb700;
      text-shadow: 1px 1px 3px black;
    }
  }
  .text-principal {
    color: #fcb700;
    font-weight: 600;
  }
}
</style>
<script>
export default {
  name: "FooterPage",
};
</script>