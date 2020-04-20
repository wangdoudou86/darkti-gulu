const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col',() => {
    it('col存在', () => {
        expect(Col).to.be.ok
    })
   
    describe('props',() => {
        it('col可以接受span',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            let vm = new Constructor({
                propsData:{
                    span: '12'
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-12')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
        it('col可以接受offset',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            let vm = new Constructor({
                propsData:{
                    offset: '2'
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-2')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
        it('col可以接受ipad',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            let vm = new Constructor({
                propsData:{
                    ipad: { span: '10', offset: '2'}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('ipad-span-10')).to.eq(true)
            expect(element.classList.contains('ipad-offset-2')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
        it('col可以接受narrowPc',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            let vm = new Constructor({
                propsData:{
                    narrowPc: { span: '10', offset: '2'}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('narrow-pc-span-10')).to.eq(true)
            expect(element.classList.contains('narrow-pc-offset-2')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
        it('col可以接受pc',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            let vm = new Constructor({
                propsData:{
                    pc: { span: '10', offset: '2'}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('pc-span-10')).to.eq(true)
            expect(element.classList.contains('pc-offset-2')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
        it('col可以接受widePc',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            let vm = new Constructor({
                propsData:{
                    widePc: { span: '10', offset: '2'}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('wide-pc-span-10')).to.eq(true)
            expect(element.classList.contains('wide-pc-offset-2')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
    })
    
    
})