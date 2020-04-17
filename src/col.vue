<template>
   <div class="col" :class="[span && `col-${span}`]">
       <slot></slot>
   </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props:{
        span: {
            type: [Number, String]  //意味这两种格式都可以
        }
    }
}
</script>
<style lang="scss">
.col{
    height: 100px;
    width: 50%;
    background-color: grey;
    border: 1px solid green;
    $class-prefix: col-;   //定义class的前缀
    @for $n from 1 through 24 {  //$n就是传进来的span
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;  //乘100%就会变成百分数
      }
    }
}
</style>