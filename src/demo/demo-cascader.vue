<template>
  <div class="box">
    <div>
      <d-cascader
        :source.sync="source"
        popoverHeight="250px"
        :selected.sync="selected"
        :load-data="loadData"
      ></d-cascader>
    </div>
  </div>
</template>
<script>
import Cascader from "../cascader/cascader.vue";
import db from "../../test/fixtures/db.js";  //返回的数据结构需统一

// 获取所选择节点的整体数据（这块应该是请求后端给的接口，来得到相应的数据）
function ajax(id = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => {
        return item.parent_id == id;
      });
      //返回isLeaf来判断它是不是最后一级
      result.forEach((node) => {
        if (db.some((item) => node.id === item.parent_id )) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      resolve(result);
    }, 2000);
  });
}
export default {
  components: {
    "d-cascader": Cascader,
  },
  data() {
    return {
      source: [], // 动态加载
      selected: [], //为什么这里要传一个selected，因为以防万一有默认的展示
      // source: [
      //     {
      //         name: "浙江",
      //         children: [
      //             {
      //                 name: "杭州",
      //                 children: [{name: "上城"}, {name: "下城"}, {name: "江干"}]
      //             },
      //             {
      //                 name: "嘉兴",
      //                 children: [{name: "南湖"}, {name: "秀洲"}, {name: "嘉善"}]
      //             }
      //         ]
      //     },
      //     {
      //         name: "福建",
      //         children: [
      //             {
      //                 name: "福州",
      //                 children: [{name: "鼓楼"}, {name: "台江"}, {name: "仓山"}]
      //             }
      //         ]
      //     },
      //     {
      //         name: "安徽",
      //         children: [
      //             {
      //                 name: "合肥",
      //                 children: [
      //                 {
      //                     name: "瑶海"
      //                 },
      //                 {
      //                     name: "庐阳"
      //                 }
      //                 ]
      //             }
      //         ]
      //     }
      // ]
    };
  },
  created() {
    // 动态加载
    ajax(0).then((result) => {
      this.source = result;
    });
  },

  methods: {

    // 加载数据
    loadData({ id }, updateSource) {
      ajax(id).then((res) => {
        updateSource(res);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  margin: 50px;
}
</style>