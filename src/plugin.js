import Toast from './toast.vue'
let currentToast
export default {
    install(Vue,options){ //我没有引Vue，Vue是从哪来的？  通过Vue.use()传来的
        Vue.prototype.$toast = function(message,toastOptions){ //这里括号里的是$toast的属性参数
            if(currentToast){
                currentToast.close()  //组件是被销毁了，但是currentToast这个值还在啊！！！！
            }
            currentToast = createToast(Vue,message,toastOptions,()=>{currentToast = null})  
        }
    }
}

function createToast(Vue,message,toastOptions,onClose){
    let Constructor = Vue.extend(Toast)  //先生成包含Toast的一个Vue构造函数
    let toast = new Constructor({    
        propsData: toastOptions
    })
    toast.$slots.default = message 
    toast.$mount()  //slot要放在mount之前
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast  //toast是一个包含了Toast和其他options的Vue实例
}