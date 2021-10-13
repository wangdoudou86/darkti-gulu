<template>
  <div>
    <d-slides class="wrapper" :selected.sync="selected">
      <d-slides-item name="hi">
        <div class="box">111</div>
      </d-slides-item>
      <d-slides-item name="2">
        <div class="box">222</div>
      </d-slides-item>
      <d-slides-item name="hello">
        <div class="box">333</div>
      </d-slides-item>
      <d-slides-item name="4">
        <div class="box">444</div>
      </d-slides-item>
      <d-slides-item name="5">
        <div class="box">555</div>
      </d-slides-item>
    </d-slides>
  </div>
</template>

<script>
import DSlides from "./slides";
import DSlidesItem from "./slides-item";
export default {
  components: {
    "d-slides": DSlides,
    "d-slides-item": DSlidesItem,
  },
  data() {
    return {
      selected: undefined
    };
  },
  created(){
   
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 50px;
}
.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>