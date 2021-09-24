<template>
    <div  class="tab-control">
       <div   v-for="(item,index) in titles"   :key="item"   class="tab-control-item"
              :class="{active:currentIndex === index}"
              @click="btnActive(index,item)">
          <span>{{ item }}</span>
       </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data(){
          return{
            currentIndex:0
          }
      },
      methods:{
        btnActive(i,item){
          this.currentIndex=i;
          this.$emit("btngoodstype",item,i)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
     display: flex;
     text-align: center;
    font-size: 13px;
    height: 39px;
    line-height: 39px;
    background-color:#ffffff;
  }

  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
      padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom:3px solid   var(--color-tint);
  }

</style>
