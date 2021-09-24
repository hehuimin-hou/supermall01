<template>
    <div  class="bottom-bar">
      <div  class="check-content">
        <check-button  class="check-button"   @click.native="checkList"   :value="isSelectAll"   ></check-button>
        <span>全选</span>
      </div>

      <div class="price">
        总价： {{totalPrice}}
      </div>
      <div  class="calculate"  @click="calculateBtn">
        去计算({{  totalLength }})
      </div>
    </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters}  from "vuex"
  import {itemListenerMixin} from "../../../common/mixin";
    export default {
        name: "CartBottomBar",
      components:{
        CheckButton
      },
      computed:{
          ...mapGetters(['cartList']),
        totalPrice(){
            return  this.cartList.filter(res=> res.checked).reduce((preValue,item)=>{

              return preValue+item.price*item.count
            },0)
        },
        totalLength(){
            return this.cartList.filter(res=>res.checked).length;
        },
        isSelectAll(){
          if(this.cartList.length===0) return false;
          return  !this.cartList.find(res=>!res.checked)
        }
      },
      data(){
          return{
            isCheck:true
          }
      },
      methods:{
        checkList(){
            if(this.isSelectAll){
              this.cartList.forEach(item=>item.checked=false)
            }else{
              this.cartList.forEach(item=>item.checked=true)
            }
        },
        calculateBtn(){
            if(!this.isSelectAll){
              this.$toast.show("未选这商品",3000)
            }
          }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 40px;
    align-items: center;
    background-color: #e5e5e5;
    line-height: 40px;
  }


  .check-content{
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 60px;

  }

  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .price{
    flex: 1;
  }

  .calculate{
    width: 100px;
    background-color: red;
  }
</style>
