<template>
  <div id="demo">
    <d-input v-model="inputValue"></d-input>
    <div>value: {{ inputValue }}</div>
    <X v-model="num"></X>

    <d-popover>
      <template v-slot:content>
        <span>这是一段内容</span>
      </template>
      <d-button>上方出现</d-button>
    </d-popover>
  </div>
</template>

<script>
import DInput from "../input/input.vue";
import DButton from "../button/button.vue";
import X from "../x";
import DPopover from "../popover/popover.vue";

export default {
  data() {
    return {
      inputValue: "winwin",
      num: 500,
    };
  },
  components: { DInput, DButton, X, DPopover },
  methods: {
   
  },
};
</script>
<style lang="scss" scoped>
#demo {
  margin: 50px;
}
</style>
