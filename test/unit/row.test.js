const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row',() => {
    it('row存在', () => {
        expect(Row).to.be.ok
    })

    describe('props',() => {
        it('可以设置gutter', (done) => {
            Vue.component('d-row', Row) 
            Vue.component('d-col', Col)
            const div = document.createElement('div') 
            document.body.appendChild(div)
            div.innerHTML = `
                <d-row gutter="20">
                    <d-col span="12"></d-col>
                    <d-col span="12"></d-col>
                </d-row>
            `
            let vm = new Vue({
                el: div
            })
            //为什么用异步呢，因为传给col的gutter是异步获取的
            setTimeout(()=>{
                const row = vm.$el.querySelector('.row')
                expect(getComputedStyle(row).marginLeft).to.eq('-10px')
                expect(getComputedStyle(row).marginRight).to.eq('-10px')
                const cols = vm.$el.querySelectorAll('.col')  //这里注意querySelectorAll
                expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
                expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('可以设置justify', () => {
            const div = document.createElement('div') 
            document.body.appendChild(div)
            const Constructor = Vue.extend(Row)
            let vm = new Constructor({
                propsData:{
                    justify: 'center'
                }
            }).$mount(div)
            const element = vm.$el
            expect(getComputedStyle(element).justifyContent).to.equal('center')
            vm.$el.remove()
            vm.$destroy()
        })
    })
    
    
})