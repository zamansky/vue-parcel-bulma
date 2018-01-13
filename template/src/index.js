
import Vue from 'vue';
import store from './store/store'
import router from './router'

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App.vue';


Vue.use(Buefy);
Vue.use(router);


const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App) });


