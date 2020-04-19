<template>
   <div class="col" :class="colClasses" 
   :style="colStyle">
       <slot></slot>
   </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props:{
        span: {
            type: [Number, String]  //意味这两种格式都可以
        },
        offset: {
            type: [Number, String]
        },
        phone: {
          type: Object,
          validator(value){
            let keys = Object.keys(value)   //phone可以是['span'],['offset'],['span','offset'],所以需要循环验证
            let valid = true 
            keys.forEach((key)=>{
              if(!['span','offset'].includes(key)) valid = false
            })
            return valid
          }
        }
    },
    data(){
      return {
        gutter: 0
      }
    },
    computed: {
      colClasses(){
        let { span, offset, phone } = this
        let phoneClass = []
        if(phone) phoneClass = [phone.span && `phone-span-${phone.span}`, phone.offset && `phone-offset-${phone.offset}`]
        return [span && `col-${span}`, offset && `offset-${offset}`, ...phoneClass]
      },
      colStyle(){
        let { gutter } = this
        return {paddingLeft: gutter + 'px',paddingRight: gutter + 'px'}
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
    @media (max-width: 576px){
      $class-prefix: phone-span-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;  
        }
      }
      $class-prefix: phone-offset-;   
      @for $n from 1 through 24 {  
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;  
        }
      }
    }
}
</style>