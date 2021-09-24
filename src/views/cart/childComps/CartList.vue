<template>
   <div     class="cart-list">
     <div    v-for="item in cartList">
       <cart-list-items  :product="item" ></cart-list-items>

     </div>
   </div>
</template>

<script>
  import CartListItems from "./CartListItems";
import  {mapGetters}  from  "vuex"
    export default {
        name: "CartList",
        data(){
            return{}
        },
      computed:{
          ...mapGetters({
            cartList:'cartList'
          })
      },
      components:{
        CartListItems,
      }
    }
</script>

<style scoped>

</style>
