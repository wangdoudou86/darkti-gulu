<template>
    <button class="g-button darkti2" :class="{[`icon-${iconPosition}`]: true}" 
    @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading"  name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
import Icon from './icon.vue'
export default {
    name: 'GuluButton',
    components:{
            'g-icon': Icon
        },
    // props:['icon','iconPosition']
    props:{
        icon:{type: String},
        loading:{
            type: Boolean,
            default: false
        }, // 控制loading的显隐
        iconPosition:{
            type: String,
            default: 'left',
            validator(value){
                // if(value !== 'left' && value !== 'right') return false
                // return true
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>
<style lang="scss">
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button{
            height: var(--button-height);
            font-size: var(--font-size);
            padding: 0 1em;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            background-color: var(--button-bg);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: top;
            &:hover{   /*&表示当前的选择器*/
                border-color: var(--border-color-hover);
            } 
            &:active{  
                background-color: var(--button-active-bg);
            }
            &:focus{   
                outline: none;
            }
            > .icon{ order: 1; margin-right: .2em;}
            > .content{ order: 2; }
            &.icon-right{ 
                > .icon{ order: 2; margin-left: .2em;} 
                > .content{ order: 1; } 
            }
            > .loading{
                animation: spin 1s linear infinite;
            }
        }
        
</style>