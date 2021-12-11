// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

// TODO: Refactor this font awesome init into a separate Nuxt.js plugin file
// Docs -> https://github.com/FortAwesome/vue-fontawesome#nuxtjs
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(faGithub, faTwitter, faInstagram, faLinkedinIn, faLongArrowAltLeft)

export default function(Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  })

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600;1,900&display=swap',
  })

  // const opts = {} //opts includes, vuetify themes, icons, etc.
  // Vue.use(Vuetify)

  // appOptions.vuetify = new Vuetify(opts)

  Vue.component('font-awesome', FontAwesomeIcon)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
