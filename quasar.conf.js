// Configuration for your app

module.exports = ctx => ({
  // app plugins (/src/plugins)
  plugins: [
    'axios',
    'vue-currency-filter',
    'vue-the-mask',
  ],
  css: [
    'app.styl',
  ],
  extras: [
    ctx.theme.mat ? 'roboto-font' : null,
    'material-icons', // optional, you are not bound to it
    // 'ionicons',
    // 'mdi',
    // 'fontawesome'
  ],
  supportIE: false,
  build: {
    scopeHoisting: true,
    // vueRouterMode: 'history',
    // vueCompiler: true,
    // gzip: true,
    // analyze: true,
    // extractCSS: false,
    extendWebpack(cfg) {
      cfg.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      });
    },
  },
  devServer: {
    // https: true,
    // port: 8080,
    open: true, // opens browser window automatically
  },
  // framework: 'all' --- includes everything; for dev only!
  framework: {
    components: [
      'QLayout',
      'QLayoutHeader',
      'QLayoutDrawer',
      'QPageContainer',
      'QPage',
      'QToolbar',
      'QToolbarTitle',
      'QBtn',
      'QIcon',
      'QList',
      'QListHeader',
      'QItem',
      'QItemMain',
      'QItemSide',
      'QSelect',
      'QInput',
      'QTable',
      'QTr',
      'QTd',
    ],
    directives: [
      'Ripple',
      'CloseOverlay',
    ],
    // Quasar plugins
    plugins: [
      'Notify',
      'Loading',
    ],
    // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
    // i18n: 'de' // Quasar language
  },
  // animations: 'all' --- includes all animations
  animations: [],
});
