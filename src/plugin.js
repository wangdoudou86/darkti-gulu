import Toast from './toast.vue'
export default {
    install(Vue,options){ //我没有引Vue，Vue是从哪来的？  通过Vue.use()传来的
        Vue.prototype.$toast = function(message,toastOptions){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: toastOptions
            })
            toast.$slots.default = message 
            toast.$mount()  //slot要放在mount之前
            document.body.appendChild(toast.$el)
        }
        

    }
}