<template>
   <div class="col" :class="colClasses" 
   :style="colStyle">
       <slot></slot>
   </div>
</template>
<script>
let validator = (value)=>{
  let keys = Object.keys(value)   
  let valid = true 
  keys.forEach((key)=>{
    if(!['span','offset'].includes(key)) valid = false
  })
  return valid
}
export default {
    name: 'DarkCol',
    props:{
        span: {
            type: [Number, String]  //意味这两种格式都可以
        },
        offset: {
            type: [Number, String]
        },
        ipad: { type: Object, validator },
        narrowPc: { type: Object, validator },
        pc: { type: Object, validator },
        widePc: { type: Object, validator }
    },
    data(){
      return {
        gutter: 0
      }
    },
    computed: {
      colClasses(){
        let { span, offset, ipad, narrowPc, pc, widePc } = this
        let createClasses = this.createClasses
        return [
          span && `col-${span}`, 
          offset && `offset-${offset}`, 
          ...createClasses(ipad,'ipad'),
          ...createClasses(narrowPc,'narrow-pc'),
          ...createClasses(pc,'pc'),
          ...createClasses(widePc,'wide-pc')
          ]
      },
      colStyle(){
        let { gutter } = this
        return {paddingLeft: gutter / 2 + 'px',paddingRight: gutter / 2 + 'px'}
      }
    },
    methods:{
      createClasses(obj,str){
        if(!obj) return [] //这里必须返回空数组
        let classArray = []
        if(obj.span) classArray.push(`${str}-span-${obj.span}`)
        if(obj.offset) classArray.push(`${str}-offset-${obj.offset}`)
        return classArray
      }
    }
}
</script>
<style lang="scss">
.col{
    $class-prefix: col-;   //定义class的前缀
    @for $n from 1 through 24 {  //$n就是传进来的span
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;  //乘100%就会变成百分数
      }
    }
    $class-prefix: offset-;   
    @for $n from 1 through 24 {  
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;  
      }
    }
    //ipad
    @media (min-width: 577px){
      $class-prefix: ipad-span-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;  
        }
      }
      $class-prefix: ipad-offset-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;  
        }
      }
    }
    //narrow-pc
    @media (min-width: 769px){
      $class-prefix: narrow-pc-span-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;  
        }
      }
      $class-prefix: narrow-pc-offset-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;  
        }
      }
    }
    //pc
    @media (min-width: 923px){
      $class-prefix: pc-span-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;  
        }
      }
      $class-prefix: pc-offset-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;  
        }
      }
    }
    //wide-pc
    @media (min-width: 1201px){
      $class-prefix: wide-pc-span-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;  
        }
      }
      $class-prefix: wide-pc-offset-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;  
        }
      }
    }
}
</style>