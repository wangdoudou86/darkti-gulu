const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('d-tabs',Tabs)
Vue.component('d-tabs-head',TabsHead)
Vue.component('d-tabs-item',TabsItem)
Vue.component('d-tabs-body',TabsBody)
Vue.component('d-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs',() => {
    it('Tabs存在', () => {
        expect(Tabs).to.be.ok
    })

    describe('props',() => {
        it('可以接受selected',(done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <d-tabs selected="sports" >
                <d-tabs-head>
                    <d-tabs-item name="entertainment">娱乐</d-tabs-item>
                    <d-tabs-item name="society">社会</d-tabs-item>
                    <d-tabs-item name="sports">体育</d-tabs-item>
                </d-tabs-head>
                <d-tabs-body>
                    <d-tabs-pane name="entertainment">这里是娱乐</d-tabs-pane>
                    <d-tabs-pane name="society">这里是社会</d-tabs-pane>
                    <d-tabs-pane name="sports">这里是体育</d-tabs-pane>
                </d-tabs-body>
            </d-tabs> 
            `
            let vm = new Vue({
                el: div
            })
            vm.$nextTick(()=>{
                let x = vm.$el.querySelector('.d-tabs-item[data-name="sports"]')
                expect(x.classList.contains('active')).to.be.ok
                done()
            })
        })
    })
    
    
})