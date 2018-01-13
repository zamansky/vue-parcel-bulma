
import Vue from 'vue';
import store from './store/store'
import router from './router'

{{#buefy}}
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
{{/buefy}}

import App from './App.vue';

{{#buefy}}
Vue.use(Buefy);
{{/buefy}}

Vue.use(router);


const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App) });


