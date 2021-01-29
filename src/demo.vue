<template>
    <div class="box">
        <d-cascader :source.sync="source" popoverHeight="250px" :selected.sync="selected" :load-data="loadData"></d-cascader>
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
        loadData({id}, updateSource){
            ajax(id).then((res)=>{
                updateSource(res)
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.box{
    margin: 50px;
}
</style>