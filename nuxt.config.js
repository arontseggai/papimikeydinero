module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'PAPI MIKEY DINERO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', size: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'icon', type: 'image/png', size: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'icon', type: 'image/png', size: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'icon', type: 'image/png', size: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'icon', type: 'image/png', size: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'icon', type: 'image/png', size: '120x120', href: '/apple-icon-120x120.png' },    
      { rel: 'icon', type: 'image/png', size: '144x144', href: '/apple-icon-144x144.png' },    
      { rel: 'icon', type: 'image/png', size: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', size: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  env: {
    googleSheetId: '1QZSlrDz6uievtRcxZ3ZArfeSTWVzgZXScs-TzFHZE-s',
    googleApiKey: 'AIzaSyAobr7V2p7-68nRO7T_XXC-7OYnH12McMc',
  },
  plugins: [
    '~/plugins/youtube'
  ],
  /*
  ** Add css
  */
  css: [
    "~/assets/css/bulma.css",
    "~/assets/css/styles.css"
  ],
  // router: { base: '/papimikeydinero/' },
  router: { 
    ...(process.env.NODE_ENV !== 'PRODUCTION' ? {base: ''} : {base: ''})
   },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vue-youtube-embed'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
