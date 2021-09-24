<template>
    <div   class="goods-list-item">
        <img  v-lazy="showDate"   @load="imageLoad"    @click="detailGoodsItem"/>
      <div  class="goods-list-item-info">
          <p>{{ goodsListItem.title }}</p>
        <span   class="price">{{ goodsListItem.price }}</span>
        <span   class="collect">{{ goodsListItem.cfav }}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
          goodsListItem:{
            type:Object,
            default(){
              return {}
            }
          }
        },
      computed:{
         showDate(){
           if (this.goodsListItem.show!=null){
             return this.goodsListItem.show.img;
           }
            return this.goodsListItem.image;
         }
      },
      methods:{
        imageLoad(){
          /*console.log("图片加载");*/
          // 利用事件总线
          this.$bus.$emit('itemGoodsImage');
        },
        detailGoodsItem(){
          this.$router.push("/detail/"+this.goodsListItem.iid)
        }
      }
    }
</script>

<style scoped>

  .goods-list-item{
      position: relative;
    padding-bottom: 40px;
    width: 48%;
  }

  .goods-list-item  img{
    width:100%;
    border-radius: 5px;
  }

  .goods-list-item-info {
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      right: 0;
      left: 0;
      overflow:hidden;

  }
  .goods-list-item-info  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-list-item-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-list-item-info .collect{
    position: relative;
  }
  .goods-list-item-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg")  0 0/14px  14px;
  }



</style>
