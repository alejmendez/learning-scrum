import Vue from 'vue'
import { 
    BCarousel, 
    BCarouselSlide, 
    BNavbar, 
    BNavbarBrand, 
    BNavbarToggle, 
    BNavbarNav, 
    BCollapse, 
    BNavItem,
    CardPlugin,
    ImagePlugin,
    LayoutPlugin,
    ButtonPlugin,
    FormPlugin,
    FormGroupPlugin,
    FormTextareaPlugin,
    FormInputPlugin,
    AlertPlugin
} from 'bootstrap-vue'

Vue.use(CardPlugin)
Vue.use(ImagePlugin)
Vue.use(LayoutPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(FormInputPlugin)
Vue.use(AlertPlugin)

Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-collapse', BCollapse)
Vue.component('b-nav-item', BNavItem)
