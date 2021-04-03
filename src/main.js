import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);
Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  if (process.env.NODE_ENV !== 'production') {
    // Show any error but this one
    if (err.message !== "Cannot read property 'badInput' of undefined") {
      console.error(err);
    }
  }
};

document.title = process.env.VUE_APP_TITLE;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
