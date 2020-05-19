<template>
    <div class="d-collapse-item">
        <div class="title-wrapper" @click="toggle">
            <span class="icon" :class="{active: open}"><d-icon name="right"></d-icon></span>
            {{title}}
        </div>
        <div class="content" v-if="open">
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
        this.eventBus.$on('update:selected',(nameArr)=>{
            if(nameArr.indexOf(this.name) >= 0){
                this.open = true
            }else{
                this.open = false
            }
        })
        
    },
    methods:{
        //关键点
        toggle(){
            if(this.open){
                this.eventBus.$emit('update:removeSelected', this.name)
            }else{
                this.eventBus.$emit('update:addSelected', this.name)
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
            margin-right: .5em;
            transition: all .5s;
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