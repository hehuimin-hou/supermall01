<template>
<div>
  <Tarbar>
    <tarbarItem  path="/home"  activeColor="#000000">
      <img  src="~assets/image/tabbar/home.svg"  alt=""  slot="item-icon">
      <img  src="~assets/image/tabbar/home_active.svg"  alt=""  slot="item-icon-active">
      <div  slot="item-text">首页</div>
    </tarbarItem>
    <tarbarItem path="/cate">
      <img  src="~assets/image/tabbar/category.svg"  alt=""  slot="item-icon">
      <img  src="~assets/image/tabbar/category_active.svg"  alt=""  slot="item-icon-active">
      <div  slot="item-text">目录</div>
    </tarbarItem>
    <tarbarItem  path="/cart" activeColor="green">
      <img  src="~assets/image/tabbar/shopcart.svg"  alt=""  slot="item-icon">
      <img  src="~assets/image/tabbar/shopcart_active.svg"  alt=""  slot="item-icon-active">
      <div  slot="item-text">购物车</div>
    </tarbarItem>
    <tarbarItem  path="/profile"  activeColor="red">
      <img  src="~assets/image/tabbar/profile.svg"  alt=""  slot="item-icon">
      <img  src="~assets/image/tabbar/profile_active.svg"  alt=""  slot="item-icon-active">
      <div  slot="item-text">我的</div>
    </tarbarItem>
  </Tarbar>
</div>

</template>

<script>

  import Tarbar from "components/common/tarbar/Tarbar";
  import tarbarItem from "components/common/tarbar/TarbarItem";
    export default {
        name: "MainTabbar",
      components:{
        Tarbar,
        tarbarItem
      }

    }
</script>

<style scoped>

</style>
