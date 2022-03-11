<template>
  <div>
    <div class="xx">余额：{{ money }}</div>
    <button @click="changeMoney(100)">存100</button>
    <button @click="changeMoney(-100)">取100</button>
  </div>
</template>

<script>
export default {
    model: {
        prop: 'money',
        event: 'emit-money'
    },
  props: {
    money: {
      type: Number
    }
  },
  methods: {
    changeMoney(data) {
      this.$emit("emit-money", this.money + data);
    }
  }
};
</script>
<style lang="scss" scoped>
.xx {
  padding: 10px;
  display: inline-block;
  border: 1px solid red;
}
</style>
