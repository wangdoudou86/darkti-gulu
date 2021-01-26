<template>
    <div class="box">
        <d-cascader :source="source" popoverHeight="250px" :selected.sync="selected" @update:selected="xxx"></d-cascader>
    </div>
</template>
<script>
import Cascader from './cascader.vue';
import CascaderItems from './cascader-items.vue';
import db from './db.js';
function ajax(id = 0){
    return new Promise((resolve, reject)=>{
        let result = db.filter((item) =>  {
            return item.parent_id == id
        })
        resolve(result)
    })
}
export default {
    components: {
        'd-cascader': Cascader,
        'd-cascader-items': CascaderItems
    },
    data(){
        return {
            source: [],
            selected: [],  //为什么这里要传一个selected，因为以防万一有默认的展示

        }
    },
    created(){
        ajax(0).then(result => {
            this.source = result
        })
    },
    methods: {
        xxx(){
            const that = this
            ajax(this.selected[0].id).then((res)=>{
                let lastLevelSelected = that.source.filter(item => item.id === that.selected[0].id)[0]
                // lastLevelSelected.children = res
                that.$set(lastLevelSelected,'children', res)  // 一定要用$set来添加属性！！！！！！
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    margin: 50px;
}
</style>