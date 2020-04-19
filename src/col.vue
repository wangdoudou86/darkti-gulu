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
        }
    },
    data(){
      return {
        gutter: 0
      }
    },
    computed: {
      colClasses(){
        let { span, offset } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
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
}
</style>