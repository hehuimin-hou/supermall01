<template>
    <div  class="toast"  v-show="isShow">
        <slot>{{ message }}</slot>
    </div>
</template>

<script>
    export default {
        name: "Toast",
      data(){
        return{
          isShow:false,
          message:""
        }
      },
      methods:{
          show(message,timer=2000){
            console.log("执行了");
                this.isShow=true,
                this.message=message
            setTimeout(()=>{
                this.isShow=false,
                this.message=""
            },timer)

          }
      }
    }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 9;
    /* 与自身的偏移量 */
    transform: translate(-50%,50%);
    font-size: 20px;
    background-color: rgba(0,0,0,.75);
    color: #ffffff;
  }

</style>
