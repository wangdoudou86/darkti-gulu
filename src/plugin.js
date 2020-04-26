import Toast from './toast.vue'
export default {
    install(Vue,options){ //我没有引Vue，Vue是从哪来的？  通过Vue.use()传来的
        Vue.prototype.$toast = function(message){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            console.log(toast.$slots,'toast.$slot');
            toast.$slots.default = [message] //toast.$slots.default是数组格式
            toast.$mount()  //slot要放在mount之前
            document.body.appendChild(toast.$el)
        }
        

    }
}