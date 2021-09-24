<template>
    <div class="cart">
      <Navbar   class="nav-bar"  > <div slot="center"> 购物车 ({{ length }})   </div></Navbar>
      <Scroll class="cartScroll"  ref="scroll" >
        <div>
          <cart-list></cart-list>
        </div>
      </Scroll>
    <cart-bottom-bar  class="cart-bottom-bar"> </cart-bottom-bar>
    </div>
</template>

<script>
  import  Navbar  from "components/common/navbar/Navbar"
  import  CartList from "./childComps/CartList"
  import CartBottomBar from "./childComps/CartBottomBar";

  import Scroll  from "components/common/betterScroll/Scroll"

  import {mapGetters} from "vuex"
    export default {
        name: "Cart",
      components:{
        Navbar,
        CartList,
        Scroll,
        CartBottomBar

      },
      computed:{
          ...mapGetters({
            length:'cartLength',
            list:'cartList'
          })
      },
      activated() {
          this.$refs.scroll.refresh();
      }
    }
</script>

<style scoped>

  .nav-bar{
    background-color:var(--color-tint);
    color:#ffffff;
  }

  .cart{
    position: relative;
    height:  100vh;
  }
  .cartScroll{
    height: calc(100% - 93px - 40px);
    overflow: hidden;
  }

  .cart-bottom-bar{

  }

</style>
