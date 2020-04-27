const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast',() => {
    it('toast存在', () => {
        expect(Toast).to.be.ok
    })

    describe('props',() => {
        it('可以设置autoClose',(done)=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData:{
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('可以设置closeButton',()=>{
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData:{
                    autoClose: false,
                    closeButton: {
                        text: 'over',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.closeText')
            expect(closeButton.innerText).to.eq('over')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('可以设置enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData:{
                    enableHtml: true
                }
            })
            vm.$slots.default = '<p>hi<em id="nct">nct</em></p>'
            vm.$mount()
            let htmlElement = vm.$el.querySelector('#nct')
            expect(htmlElement).to.be.ok
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以设置position',()=>{
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData:{
                    position: 'middle'
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('position-middle')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
        
    })
    
})