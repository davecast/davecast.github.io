const locale = process.env.NUXT_LOCALE || 'es'

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    bodyAttrs: {
      class: ['']
    }
  },
  css: [
    // CSS file in the project
    '@/assets/css/style.css',
  ],
  http: {
    proxy: true
  },
  manifest: {
    lang: locale
  },
  loading: { color: '#41B883' },
  generate: {
    fallback: true,
    interval: 100
  },
  
}