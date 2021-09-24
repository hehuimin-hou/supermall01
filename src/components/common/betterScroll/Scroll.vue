<template>
    <div   class="wrapper"   ref="wrapper">
        <div  class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

 import BScroll  from  "better-scroll"
    export default {
        name: "Scroll",
        props:{
          probeType:{
            type:Number,
            default:0
          },
          pullUpLoad:{
            type: Boolean,
            default: false
          }

        },
         data(){
          return {
              scroll:null
          }
         },
        mounted() {
          this.scroll=new BScroll(this.$refs.wrapper,{
              observeDOM:true, //版本原因需要家此属性
              click:true,
              probeType:this.probeType,
              pullUpLoad:this.pullUpLoad
           })

          if(this.pullUpLoad){
               this.scroll.on('pullingUp',()=>{
                 this.$emit("pullingUp")
               })
            }
          if(this.probeType===2 || this.probeType === 3){
            this.scroll.on('scroll',(position)=>{
              // 将position 送到父组件
              this.$emit('btnPosition',position)
            })
          }

        },
      methods:{
          scrollTo(i,x,time=500){
            this.scroll.scrollTo(i,x,time);
          },
          finishPullUp(){
            this.scroll.finishPullUp();
          },
          refresh(){
            this.scroll &&  this.scroll.refresh();
          },
          getSaveY(){
            return this.scroll !=null ? this.scroll.y :0;
          }
      }
    }
</script>

<style scoped>

</style>
