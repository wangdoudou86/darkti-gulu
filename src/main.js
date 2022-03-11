import Vue from "vue";
// import Democascader from "./demo/demo-cascader.vue";
// import Demoslides from "./demo/demo-slides.vue";
import Demo from './demo/demo-common.vue'
import './public.css';
Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo)
}).$mount("#app");