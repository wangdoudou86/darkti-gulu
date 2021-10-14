const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem',() => {
    it('TabsItem存在', () => {
        expect(TabsItem).to.be.ok
    })

    describe('props',() => {
        it('item接受name', () => {
            const Constructor = Vue.extend(TabsItem)
            let vm = new Constructor({
                propsData:{
                    name: 'nct'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('nct')
        })
        it('item接受disabled', () => {
            const Constructor = Vue.extend(TabsItem)
            let vm = new Constructor({
                propsData:{
                    disabled: true
                }
            }).$mount()
            const callback = sinon.fake()
            vm.$on('click',callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })
    })
    
    
})