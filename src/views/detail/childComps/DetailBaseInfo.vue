<template>
    <div  v-if="Object.keys(baseGoods).length !== 0" class="base-info">
      <div  class="info-title">  {{ baseGoods.title}}</div>
      <div  class="info-price">
          <span  class="n-price">{{ baseGoods.newPrice}}</span>
          <span  class="o-price">{{ baseGoods.oldPrice}}</span>
          <span    v-if="baseGoods.discount"  class="discount">{{ baseGoods.discount}}</span>
      </div>
      <div  class="info-other">
        <span  >{{ baseGoods.columns[0]}}</span>
        <span >{{ baseGoods.columns[1]}}</span>
        <span  >{{ baseGoods.services[baseGoods.services.length-1].name}}</span>
      </div>
      <div  class="info-service">
        <span class="info-service-item"  v-for="index in baseGoods.services.length-1"  :key="index">
          <img  :src="baseGoods.services[index-1].icon">
          <span>{{ baseGoods.services[index-1].name }}</span>
        </span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
      props:{
          baseGoods:{
            type:Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>

  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title{
    color: #222;
  }

  .info-price{
      margin-top: 10px;
  }
  .info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }


  .info-price .discount{
    border-radius: 5px;
    background-color: var(--color-high-text);
    color: #ffffff;
    margin: 0 0 10px 10px;
  }

  .info-other{
      display: flex;
      text-align: center;
      font-size: 10px;
      margin:10px 0 10px 0;
  }

  .info-other  span{
    flex: 1;
  }

  .info-service{
    display: flex;
    margin:10px 0 10px 0;
    font-size: 13px;
  }

  .info-service-item{
    flex: 1;
  }

  .info-service-item img{
    width: 10px;
  }





</style>
