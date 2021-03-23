import Vue from "vue";
// import Demo from "./demo.vue";
import Demo1 from "./demo1.vue";
import './public.css';
Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo1)
}).$mount("#app");