<template>
    <div class="box">
        <d-cascader :source="source" popoverHeight="150px" :selected.sync="selected"></d-cascader>
    </div>
</template>
<script>
import Cascader from './cascader.vue';
import CascaderItems from './cascader-items.vue';
import Input from './input.vue';
export default {
    components: {
        'd-cascader': Cascader,
        'd-cascader-items': CascaderItems
    },
    data(){
        return {
            source: [
                {
                    name: '浙江',
                    children: [{
                        name: '杭州',
                        children: [{
                            name: '上城区'
                        },{
                            name: '下城区'
                        },{
                            name: '江干区'
                        }]
                    }]
                },{
                    name: '四川',
                    children: [{
                        name: '成都',
                        children: [{
                            name: '青羊区'
                        },{
                            name: '武侯区'
                        },{
                            name: '金牛区'
                        }]
                    },{
                        name: '自贡',
                        children: [{
                            name: '大安区'
                        }]
                    }]
                }
            ],
            selected: []  //为什么这里要传一个selected，因为以防万一有默认的展示
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    margin: 50px;
}
</style>