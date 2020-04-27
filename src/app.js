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
        autoToast(){
            this.$toast('3秒后关闭')
        },
        
        toastTop(){
            this.channelToast('top')
        },
        toastBottom(){
            this.channelToast('bottom')
        },
        toastMiddle(){
            this.channelToast('middle')
        },
        channelToast(position){
            this.$toast(`这次数字为${parseInt(Math.random() * 100)}`,{
                autoClose: false,
                closeButton: {
                    text: '确定',
                    callback: function(){
                        console.log('关闭了')
                    }
                },
                position
            })
        }
    }
})

