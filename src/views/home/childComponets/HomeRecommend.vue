<template>
    <div  class="recommend">
      <div  v-for="item in recommends"  class="recommend-item">
        <a :href="item.link">
          <img  :src="item.image"  alt=""  >
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommends:{
              type:Array,
              default (){
                return []
              }
            }
        }
    }
</script>

<style scoped>
  .recommend{
      display: flex;
      font-size: 12px;
      text-align: center;
      border-bottom: 6px solid  #eee;
  }

  .recommend-item{
    flex: 1;
    margin: 9px 0 10px;
  }

  .recommend-item  img{
    width: 70px;
    margin-bottom: 10px;

  }

</style>
