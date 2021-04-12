<template>
  <div id="formulario">
    <div class="section ligth">
      <div class="container fadeInUp wow" data-wow-duration="0.5s">
        <h3>¿Tienes alguna pregunta?</h3>
        <div class="line bg-primary mb-5"></div>

        <b-row>
          <b-col lg="6" class="text-center">
            <h4>¿Desea conocer más de nuestros entrenamientos?</h4>
            <p>
              Escríbenos un mensaje con tus interrogantes, dudas o sugerencias,
              indicando tus contáctos y te contactaremos sin ningún compromiso.
            </p>
          </b-col>
          <b-col lg="6" class="text-left">
            <b-form-group
              description=""
              label="Nombre"
              label-for="nameContact"
              :invalid-feedback="invalidFeedbackName"
              :valid-feedback="validFeedbackName"
              :state="stateName"
            >
              <b-form-input
                id="nameContact"
                v-model="nombre"
                trim
                :state="stateName"
                @keyup="dirty.name = true"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              description=""
              label="Correo electrónico"
              label-for="emailContact"
              :invalid-feedback="invalidFeedbackEmail"
              :valid-feedback="validFeedbackEmail"
              :state="stateEmail"
            >
              <b-form-input
                id="emailContact"
                v-model="correo"
                trim
                :state="stateEmail"
                @keyup="dirty.email = true"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-textarea
                v-model="mensaje"
                placeholder="Escribe tu mensaje..."
                rows="4"
                max-rows="8"
              ></b-form-textarea>
            </b-form-group>
            
            <b-alert 
              :variant="sentStatus"
              :show="sent" 
            >
              Correo enviado
            </b-alert>

            <b-button 
              block size="lg" 
              variant="primary" 
              class="animacion"
              :disabled="!stateEmail || !stateName"
              @click="sendMessage()"
            >
              Enviar mensaje
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Formulario",
  data: () => {
    return {
      nombre: "",
      correo: "",
      mensaje: "",
      sent: false,
      sentStatus: 0,
      dirty: {
        name: false,
        email: false,
      },
    };
  },
  computed: {
    stateEmail() {
      if (!this.dirty.email) {
        return;
      }
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.correo).toLowerCase());
    },
    invalidFeedbackEmail() {
      if (!this.stateEmail) {
        return "Introduce una dirección de correo valida";
      }
      return "Verifica tu correo";
    },
    validFeedbackEmail() {
      return this.stateEmail === true
        ? ""
        : "";
    },

    stateName() {
      if (!this.dirty.name) {
        return;
      }
      return this.nombre.length >= 3;
    },
    invalidFeedbackName() {
      if (this.nombre.length > 3) {
        return "";
      }
      if (this.nombre.length > 0) {
        return "Introduce tu nombre";
      }
      return "Upps! al parecer no haz colocado tu nombre";
    },
    validFeedbackName() {
      return this.stateName === true ? "" : "Este nombre no es valido";
    },
  },
  methods: {
    sendMessage() {
      const data = {
        name: this.nombre,
        email: this.correo,
        message: this.mensaje,
      };

      axios.post('http://learningscrum.cl/enviar.php', data)
        .then((response) => {
          this.sent = true;
          this.sentStatus = 'success';
          
          this.nombre = '';
          this.correo = '';
          this.mensaje = '';

          this.dirty.name = false;
          this.dirty.email = false;

          setTimeout(() => {
            this.sent = false;
          }, 5000);
        })
        .catch((error) => {
          this.sent = true;
          this.sentStatus = 'danger';
          setTimeout(() => {
            this.sent = false;
          }, 5000);
        });
    }
  },
};
</script>
