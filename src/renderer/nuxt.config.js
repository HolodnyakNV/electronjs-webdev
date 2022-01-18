/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: '32video',
    meta: [{ charset: "utf-8" }],
    script: [
      { src: '/common.js' },
    ]
  },
  css: [
    '~/assets/css/style.css'
  ],
  loading: false,
  plugins: [
    
    
    
  ],
  buildModules: [
    
  ],
  modules: [
    
  ],
};
