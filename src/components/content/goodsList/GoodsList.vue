<template>
    <div  class="goods-list">
      <goods-list-item   v-for="item in goodsList"   :goodsListItem="item"    ></goods-list-item>
    </div>
</template>

<script>

    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
      components:{
        GoodsListItem
      },
      props:{
          goodsList:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .goods-list{
    /*flex  下面的元素必有width*/
    display: flex;
    /*包含曲折*/
    flex-wrap: wrap;
    /* 将元素  均衡分开    老师使用的space-around */
    justify-content: space-evenly;
  }

</style>
