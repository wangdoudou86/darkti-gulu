<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <!-- <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg> -->
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    // props:['icon','iconPosition']
    props:{
        icon:{},
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
<style lang="less">
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
        }
        
</style>