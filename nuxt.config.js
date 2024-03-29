module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mse-web-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    }
  },
  router: {
    mode: 'history'
  },
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
  ],

  vuetify: {
    // Vuetify options
    //  theme: { }
  },
  axios: {
    baseURL: 'http://localhost:8080/',
    proxyHeaders: false,
    credentials: false,
  },
  css: [
    '@/assets/css/style.css',
  ],
}

