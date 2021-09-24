<template>
    <div  class="detail-navbar">
        <Navbar>
            <div    slot="left"    class="back"  @click="btnBack">
                <img   src="~assets/image/common/back.svg">
            </div>
            <div  slot="center"  class="title">
                <div  class="title-item"
                      v-for="(item,index) in title"
                      :class="{active:index==currentIndex}"
                      @click="btnTitle(index)"
                      >
                  {{ item }}
                </div>
           </div>
        </Navbar>
    </div>
</template>

<script>

  import Navbar from "components/common/navbar/Navbar";

    export default {
        name: "DetailNavBar",
      components:{
        Navbar
      },
      props:{
        currentNavbar:{
          type:Number,
          return: 0
        }
      },
      data(){
          return{
            title:['商品','参数','详情','推荐'],
            currentIndex:0,
          }
      },
      methods:{
        btnTitle(index){
         this.currentIndex=index
          this.$emit("btnClickNavbar",index)


        },
        btnBack(){
        /*  this.$router.back()*/
          this.$router.go(-1)
        }
      },
      watch:{
        currentNavbar(){
          this.currentIndex=this.currentNavbar

        },
       /* currentIndex(){
          console.log('currentIndex',this.currentIndex);
        }*/

      }


    }
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }

  .active{
    color: var(--color-tint);
    font-size: 13px;
  }
  .back img{
    margin-top: 10px;
  }

</style>
