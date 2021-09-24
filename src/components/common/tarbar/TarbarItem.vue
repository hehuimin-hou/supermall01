<template>
      <div    class="tab_bar_item"  @click="itemClick">
        <div  v-if="isActive"><slot  name="item-icon"></slot></div>
        <div  v-else><slot  name="item-icon-active"></slot></div>
        <div  :style="activeStyle">
          <slot  name="item-text"></slot>
        </div>
      </div>
</template>

<script>
    export default {
        name: "TarbarItem",
        props:{
          path:{
            type: String
          },
          activeColor:{
            type: String,
            default:'red',
            required:false
          }
        },
        data(){
          return {
           /* isActive:false*/
            count:0,
          }
        },
      computed:{
        isActive(){
          return  this.$route.path.indexOf(this.path)!=-1
        },
        activeStyle(){
          return  this.isActive ?{color:this.activeColor}:{}
        }
      },

      methods:{
          itemClick(){
            this.$router.push(this.path)
          }

        }
    }
</script>

<style scoped>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;

  }
  .tab_bar_item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }

</style>
