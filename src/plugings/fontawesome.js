import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faPhone,
    faEnvelope,
    faDiagnoses,
    faEye
} from '@fortawesome/free-solid-svg-icons'

import { 
    faInstagramSquare,
    faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faEnvelope, faDiagnoses, faEye, faInstagramSquare, faFacebookSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
