import Vue from 'vue'
import App from './App.vue'
import slick from 'slick-carousel';
Vue.config.productionTip = false
Vue.use(slick);
new Vue({
  render: h => h(App),
}).$mount('#app')
