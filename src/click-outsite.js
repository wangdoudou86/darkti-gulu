let callbacks = []

let onClickDocument = (e) => {
    let { target } = e
    callbacks.forEach((item)=>{
        // 当点击的元素就是input框或者是在input框里面的元素 就不做任何操作
        if(target === item.el || item.el.contains(target)) return
        item.callback()
    })
}
// 初始化的时候就会执行这句代码，当你点击页面的时候，就执行onClickDocument函数
document.addEventListener('click', onClickDocument)

export default {
    bind(el, binding, vnode){
        // binding的value就是指令赋值给指令的js代码
        callbacks.push({ el: el, callback: binding.value})
    }
}

