import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';
import Layout from './layout.vue';
import Header from './header.vue';
import Sider from './sider.vue';
import Content from './content.vue';
import Footer from './footer.vue';
import ToastPlugin from './plugin'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.use(ToastPlugin)

new Vue({
    el: '#app',
    data:{
        loading1: false,
        message: 'nct'
    },
    methods: {
        inputChange(e){
            console.log(e,'eeeee')
        },
        channelToast(){
            this.$toast('我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦我是出来啦',{
                autoClose: false,
                closeButton: {
                    text: '确定',
                    callback: function(e){
                        console.log(e,'ekkkk');
                    }
                }
            })
        }
    }
})

