<template>
    <div  class="nav-bar">
      <div  class="nav-bar-left"><slot  name="left"></slot></div>
      <div  class="nav-bar-center"><slot  name="center"></slot></div>
      <div  class="nav-bar-right"><slot  name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  .nav-bar{
      display: flex;
      box-shadow: 0 1px 1px rgba(100,100,100,.3);
      text-align: center;
      height: 44px;
      line-height: 44px;

  }
  .nav-bar-left, .nav-bar-right{
    width: 60px;

  }

  .nav-bar-center{
    flex: 1;
  }

</style>
