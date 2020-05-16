<template>
    <div class="d-collapse-item">
        <div class="title-wrapper" @click="toggle">
            <span class="icon" :class="{active: open}"><d-icon name="right"></d-icon></span>
            {{title}}
        </div>
        <div class="content" v-if="open" ref="contentWrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DarkCollapseItem',
    inject: [ 'eventBus' ],
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            open: false
        }
    },
    mounted(){
        if(!this.$slots.default){
            this.$refs.contentWrapper.style.display = 'none'
        }
        this.eventBus.$on('update:seleted',(nameArr)=>{
            nameArr.forEach((name)=>{
                if(name === this.name){
                    this.open = true
                }
            })
        })
    },
    methods:{
        toggle(){
            if(this.open){
                this.open = false
            }else{
                this.open = true
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$border-color: #ddd;
.d-collapse-item{
    > .title-wrapper{
        border-top: 1px solid $border-color;
        padding: 6px;
        display: inline-flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
        > .icon{
            font-size: 12px;
            margin-right: .3em;
            transition: all .3s;
            &.active{
                transform: rotate(90deg);
            }
        }
    }
    > .content{
        border-top: 1px solid $border-color;
        padding: 6px;
    }
    &:first-child{
        > .title-wrapper{
            border-top: none;
        }
    }
}
</style>