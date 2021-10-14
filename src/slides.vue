<template>
  <div class="d-slides">
    <div class="d-slides-window" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <div class="d-slides-wrap">
        <slot></slot>
      </div>
    </div>

    <div class="d-slides-dots" v-if="dots">
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n - 1 }" @click="select(n-1)">
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarkSlides',
  props: {
    selected: {
      type: String,
    },
    // 是否自动轮播
    autoplay: {
      type: Boolean,
      default: true,
    },
    // 是否显示面板指示点
    dots: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      childrenLength: 0,
      timerId: null,
      lastSelectedIndex: null,  // 上一张图片的idnex
      isClicked: false, // 是否点击圆点了
      startTouch: null, // 开始触摸的坐标数组
      isTouched: false, // 是否是滑动
    };
  },
  mounted() {
    this.updateChildren();
    if (this.autoplay){
      this.playAutomatically();
    }
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren();
  },
  beforeDestroy(){
    this.pause()
  },
  computed: {
    // 目前所选的selected的item的index
    selectedIndex(){
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },

    // 为了防止子组件里用户写进去不是SlidesItem的组件
    items(){
      let arr = this.$children.filter(vm => vm.$options.name === 'DarkSlidesItem')
      return arr.length > 0 ? arr : console.warn('请引入slides-item组件')
    },
    names(){
      return this.items.map(vm => vm.name);
    },

  },
  methods: {
    // 鼠标进入轮播图内
    onMouseEnter(){
      this.pause()
    },
    // 鼠标离开轮播图
    onMouseLeave(){
      if(this.autoplay){
        this.playAutomatically()
      }
    },

    pause(){
      clearTimeout(this.timerId)
      this.timerId = null
    },

    onTouchStart(e){
      this.isTouched = true
      this.pause();
      // 如果一个以上指头在触摸，则退出去
      if(e.touches.length > 1) return
      this.startTouch = e.touches[0]
    },
    onTouchEnd(e){
      let touchEnd = e.changedTouches[0]
      let {clientX: x1, clientY: y1} = this.startTouch
      let {clientX: x2, clientY: y2} = touchEnd

      // 斜边的长度
      let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
      let deltaY = Math.abs(y2 - y1)

      let rate = distance / deltaY

      // 这个范围内才认为是在左滑/右滑图片
      if(rate > 2){
        if(x2 > x1){
          // 右滑
          this.changedIndex(this.selectedIndex - 1)
        }else{
          // 左滑
          this.changedIndex(this.selectedIndex + 1)
        }
      }
      this.$nextTick(()=>{
        this.isTouched = false
        // 触摸后若原本开启了自动播放那就让它立马再次开启
          if (this.autoplay){
            this.playAutomatically()
          }
      })
    },

    playAutomatically() {
      // 最好用setTimeout来模拟setInterval
      let run = ()=>{
        // 自动播放时只能正向走
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index + 1
        this.lastSelectedIndex = index
        if(newIndex === this.names.length){ newIndex = 0 }
        this.$emit('update:selected', this.names[newIndex])
        this.isClicked = false
        this.timerId = setTimeout(run, 4000)
      }
      this.timerId = setTimeout(run, 4000)
    },

    // 点击小圆圈来切换图片
    select(newIndex){
      this.isClicked = true
      this.changedIndex(newIndex)
    },

    changedIndex(newIndex){
      this.lastSelectedIndex = this.selectedIndex
      // 这种情况左滑时会出现
      if(newIndex === -1){ newIndex = this.names.length - 1}

      if(newIndex === this.names.length){ newIndex = 0 }
      this.$emit('update:selected', this.names[newIndex])
    },

    // 得到初次进来时的selected
    getSelected() {
      return this.selected || this.items[0].name;
    },
    
    updateChildren() {
      let selected = this.getSelected();
      // slides-item有自己的data——selected
      // 要通知到每个slides-item，现在选中的是哪个slides-item
      this.items.forEach((vm) => {
        let reverse = this.lastSelectedIndex >= 0 && this.lastSelectedIndex > this.selectedIndex

        // 开启自动轮播时
        if(this.timerId){
          // 从第一张到最后一张  自动播放和手动点击都是正向，所以就不做特殊处理了
          // 从最后一张到第一张  自动播放时是正向，手动点击时是反向
          if(this.selectedIndex === 0 && this.lastSelectedIndex === this.names.length - 1){
            reverse = this.isClicked
          }
        }

        // 触摸滑动时
        if(this.isTouched){
          // 从最后一张到第一张
          if(this.selectedIndex === 0 && this.lastSelectedIndex === this.names.length - 1){
            reverse = false
          }
          // 从第一张到最后一张
          if(this.selectedIndex === this.names.length - 1 && this.lastSelectedIndex === 0){
            reverse = true
          }
        }
        vm.reverse = reverse
        // 数据全部更新后，再进行DOM操作
        // 不在$nextTick里进行DOM操作，拿到的reverse不是最新值，所以图片退出去的方向不是正确的
        // 因为item的v-if用到了selected，所以改变item的selected算是进行DOM操作
        this.$nextTick(()=>{
          vm.selected = selected;
        })
      });
    },

  },
};
</script>
<style lang='scss' scoped>
.d-slides {
  &-window {
    overflow: hidden;
  }
  &-wrap {
    position: relative;
  }
  &-dots{
    display: flex;
    justify-content: center;
    & > span{
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      font-size: 12px;
      background-color: #ddd;
      color: #333333;
      margin: 5px;
      cursor: pointer;
      &.active{
        background-color: orange;
        color: #ffffff;
        font-weight: bold;
        cursor: default;
      }
    }
  }
}
</style>
