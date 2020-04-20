const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input',() => {
    it('input存在', () => {
        expect(Input).to.be.ok
    })

    describe('props',() => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以设置value', () => {
            vm = new Constructor({
            propsData: {
                value: 'nct'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('nct')
        })
        it('接收disabled', () => {
            vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收readonly', () => {
            vm = new Constructor({
            propsData: {
                readonly: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)  //这里readOnly注意大写
        })
        it('接收error', () => {
            vm = new Constructor({
            propsData: {
                error: '你出错了呀'
            }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorElement = vm.$el.querySelector('.errorMessage')
            expect(errorElement.innerText).to.equal('你出错了呀')
        })
    })
    
    describe('事件',() => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件', () => {
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                //触发input的change 事件
                let event = new Event(eventName);
                Object.defineProperty(
                    event, 'target', {
                      value: {value: 'hello'}, enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hello')
            })
        })
    })
})