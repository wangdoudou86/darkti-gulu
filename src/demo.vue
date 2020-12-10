<template>
    <div>
        <div class="box">
            <d-button :loading="loading1" @click="loading1 = !loading1">
                按钮
            </d-button>
            <d-button icon="settings" :loading="true" icon-position="left">
                按钮
            </d-button>
            <d-button icon="settings" icon-position="right">
                按钮
            </d-button>
        </div>

        <d-collapse :selected.sync="selectedName" single>
            <d-collapse-item title="标题1" name="1">这是内容1</d-collapse-item>
            <d-collapse-item title="标题2" name="2">这是内容2</d-collapse-item>
            <d-collapse-item title="标题3" name="3">这是内容3</d-collapse-item>
        </d-collapse>   

    </div>
</template>
<script>
import Button from './button.vue';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
export default {
    components: {
        'd-button': Button,
        'd-collapse': Collapse,
        'd-collapse-item': CollapseItem
    },
    data(){
        return {
            selectedName: ['2']
        }
    }
}
</script>
<style lang="scss" scoped>
    *,*::before,*::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --font-size: 14px;
        }

        body {
            font-size: var(--font-size);
        }
        .box{
            margin: 20px;
        }
</style>