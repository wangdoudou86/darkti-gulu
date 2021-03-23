<template>
  <div id="xxx">
    <div class="header">
      <Pao :duration="20" :width="1200">
          <!-- 保证imageBox里面元素的宽度大于Pao组件的宽度即可 -->
        <div class="imageBox">
          <!-- <div class="item">
            <img src="./images/honor1.png" alt="" />
          </div>
          <div class="item">
            <img src="./images/honor2.png" alt="" />
          </div>
          <div class="item">
            <img src="./images/honor3.png" alt="" />
          </div>
          <div class="item">
            <img src="./images/honor4.png" alt="" />
          </div>
          <div class="item">
            <img src="./images/honor5.png" alt="" />
          </div>
          <div class="item">
            <img src="./images/honor6.png" alt="" />
          </div> -->
          <div class="text">winwin乐园开业啦~~~~~</div>
          <div class="text">动物乐园也开业啦~~~~~</div>
          <div class="text">kun乐园也开业啦~~~~~</div>
          <div class="text">lucas乐园也开业啦~~~~~</div>
        </div>
      </Pao>
    </div>
  </div>
</template>

<script>
import Pao from "./pao.vue";
export default {
  components: { Pao },
};
</script>
<style lang='scss' scoped>
#xxx {
  width: 100vw;
  .header {
    max-width: 1200px;
    margin: 30px auto;
    border: 1px solid red;
    .imageBox {
      display: flex;
      .text{
          width: 500px;
      }
    //   .item {
    //     margin-right: 12px;
    //     width: 240px;
    //     height: 286px;
    //     img {
    //       width: 240px;
    //       height: 286px;
    //     }
    //   }
    }
  }
}
</style>