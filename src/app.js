import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1: false
    }
})

//单元测试
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies)
const expect = chai.expect

{
    const profile = Vue.extend(Button) //Button组件本身是个对象，需要把它变成vue实例
    const vm = new profile({
        propsData:{
            icon: 'settings'
        }
    })
    vm.$mount() //这样会把button实例放在内存里
    let use = vm.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.equal('#i-settings')  //详见chai的文档
    vm.$el.remove()  
    vm.$destroy()
}

{
    const profile = Vue.extend(Button) 
    const vm = new profile({
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let use = vm.$el.querySelector('use')
    let href = use.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    vm.$el.remove() 
    vm.$destroy()
}

{ 
    //测试iconPosition，iconPosition在右边的话，svg的order应该是2
    const profile = Vue.extend(Button) 
    const vm = new profile({
        propsData:{
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    let div = document.createElement('div')
    document.body.appendChild(div)
    vm.$mount(div)  //这里就必须挂载到div上，不能存到内存里了，因为要获取元素的css
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order  
    expect(order).to.equal('2')  //css所有的属性值都是字符串
    vm.$el.remove()  //用完就把实例消除掉
    vm.$destroy()
}

{
    // 测试点击事件，这时就要用到mock，引入chai-spies
    const profile = Vue.extend(Button) 
    const vm = new profile({
        propsData:{
            icon: 'settings'
        }
    })
    vm.$mount()
    let spy = chai.spy(()=>{})
    vm.$on('click', spy) //绑定spy这个函数
    //希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.called() //断言spy这个函数被点击执行了
    vm.$el.remove()  //用完就把实例消除掉
    vm.$destroy()
}