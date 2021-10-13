import Vue from "vue";
import ButtonGroup from "./button-group.vue";
import Button from "./button.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";
import Header from "./header.vue";
import Layout from "./layout.vue";
import Sider from "./sider.vue";
import Icon from "./icon.vue";
import Input from "./input.vue";
import ToastPlugin from "./plugin";
import Tabs from "./tabs";
import TabsBody from "./tabs-body";
import TabsHead from "./tabs-head";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";

Vue.component("d-button", Button);
Vue.component("d-icon", Icon);
Vue.component("d-button-group", ButtonGroup);
Vue.component("d-input", Input);
Vue.component("d-row", Row);
Vue.component("d-col", Col);
Vue.component("d-layout", Layout);
Vue.component("d-header", Header);
Vue.component("d-sider", Sider);
Vue.component("d-content", Content);
Vue.component("d-footer", Footer);
Vue.use(ToastPlugin);
Vue.component("d-tabs", Tabs);
Vue.component("d-tabs-head", TabsHead);
Vue.component("d-tabs-item", TabsItem);
Vue.component("d-tabs-body", TabsBody);
Vue.component("d-tabs-pane", TabsPane);
Vue.component("d-popover", Popover);
Vue.component("d-collapse", Collapse);
Vue.component("d-collapse-item", CollapseItem);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    message: "nct2020",
    selectedItem: "society",
    selectedName: ["2"],
  },
  methods: {
    yyy() {
      console.log("uuuuu");
    },
    inputChange(e) {
      console.log(e, "eeeee");
    },
    autoToast() {
      this.$toast("3秒后关闭");
    },

    toastTop() {
      this.channelToast("top");
    },
    toastBottom() {
      this.channelToast("bottom");
    },
    toastMiddle() {
      this.channelToast("middle");
    },
    channelToast(position) {
      this.$toast(`这次数字为${parseInt(Math.random() * 100)}出来了`, {
        autoClose: false,
        closeButton: {
          text: "确定",
          callback: function() {
            console.log("关闭了");
          },
        },
        position,
      });
    },
  },
});
