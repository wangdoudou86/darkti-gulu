<template>
  <div id="demo">
    <d-input v-model="inputValue"></d-input>
    <div>value: {{ inputValue }}</div>
    <d-button @click="xxx">点击</d-button>
    <X v-model="num"></X>
  </div>
</template>

<script>
import DInput from "../input";
import DButton from "../button"
import X from '../x'
export default {
  data() {
    return {
      inputValue: "winwin",
      num: 500
    };
  },
  components: { DInput, DButton, X },
  methods: {
      xxx(e){
        //   this.inputValue = e
          console.log(e, 'eee')
      }
  }
};
</script>
<style lang="scss" scoped>
#demo{
    margin: 50px;
}
</style>
