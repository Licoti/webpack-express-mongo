import '@/scss/index.scss'

import(/* webpackChunkName: "js/base" */ './base.js').then(home => {
  home.initHome();
});