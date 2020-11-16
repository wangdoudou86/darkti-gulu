<template>
    <div class="d-collapse-item">
        <div class="title-wrapper" @click="onClick">
            <span class="icon" :class="{ active: open }"><d-icon name="right" ></d-icon></span>
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>

    </div>
</template>
<script>
import Icon from './icon.vue'
export default {
    name: 'DarkCollapseItem',
    components: {
        'd-icon': Icon
    },
    inject: ['eventBus'],
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
        this.eventBus.$on('changeselected',(names)=>{
            if(names.includes(this.name)){
                this.open = true
            }else{
                this.open = false
            }
        })
    },
    methods: {
        onClick(){
            if(this.open){
                this.eventBus.$emit('removeitem', this.name)
            }else{
                this.eventBus.$emit('additem', this.name)
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
        display: flex;
        align-items: center;
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
    .content{
        border-top: 1px solid $border-color;
        padding: 6px;
    }
    &:first-child {
        > .title-wrapper{
            border-top: none;
        }
    }
}
</style>