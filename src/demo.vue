<template>
    <div class="box">
        <p>11111</p>
        <d-cascader :source="source" popoverHeight="150px"></d-cascader>
        <p>22222</p>
        <!-- <d-input value="wayv"></d-input> -->
    </div>
</template>
<script>
import Cascader from './cascader.vue';
import CascaderItems from './cascader-items.vue';
import Input from './input.vue';
export default {
    components: {
        'd-cascader': Cascader,
        'd-cascader-items': CascaderItems,
        'd-input': Input
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
            
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    margin: 50px;
}
</style>