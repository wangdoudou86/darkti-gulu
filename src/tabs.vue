<template>
    <div class="d-tabs" >
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'DarkTabs',
    props:{
        selected: {
            type: String,
            required: true
        },
        direction:{
            type: String,
            default: 'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted(){
        console.log(this.selected,'selected');
        this.eventBus.$emit('update:selected',this.selected)

    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>