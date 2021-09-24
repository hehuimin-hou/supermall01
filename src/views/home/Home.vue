<template>
    <div  class="home">
      <Navbar  class="home-bar"><div  slot="center">购物车</div></Navbar>
      <tab-control
        ref="tabControlTwo"
        class="home-tab-control"
        :titles="['流行','新款','精选']"
        @btngoodstype="homeBtnGoodsType"
        v-show="isShowBackTop"
      ></tab-control>
      <Scroll  class="content"
               ref="scroll"
               :probeType="3"
               :pullUpLoad="true"
               @btnPosition="homeBtnPosition"
               @pullingUp="homePullingUp" >

        <home-swiper    @homeImageItem="homeImageItems" :banners="banners"> </home-swiper>
        <home-recommend  :recommends="recommends"></home-recommend>
        <feature-view></feature-view>
        <tab-control
          ref="tabControlOne"
          class="home-tab-control"
          :titles="['流行','新款','精选']"
          @btngoodstype="homeBtnGoodsType"
          v-show="!isShowBackTop"
         ></tab-control>
        <goods-list  :goodsList="showGoods"></goods-list>
      </Scroll>
      <back-top  @click.native="btnBackTop"   v-show="isShowBackTop">  </back-top>
      <!--  idea 自动生成   ul>li{列表$}*100   然后tab 键-->

    </div>
</template>

<script>

    import  Navbar  from "components/common/navbar/Navbar"
    import  Scroll  from "components/common/betterScroll/Scroll"
    import  TabControl from "components/content/tabControl/TabControl"
    import  GoodsList from "components/content/goodsList/GoodsList";
    import  BackTop from  "components/content/backTop/BackTop"

    import HomeSwiper from "./childComponets/ChildComponets";
    import HomeRecommend  from "./childComponets/HomeRecommend"
    import  FeatureView from  "./childComponets/FeatureView"


    import  {itemListenerMixin,bottomBarMixin}  from "common/mixin"
    import {getHomeMultData,getHomeGoods}  from 'network/home'

      export default {
          name: "Home",
        components:{
            Scroll,
            Navbar,
            TabControl,
            HomeSwiper,
            HomeRecommend,
            FeatureView,
            GoodsList,
            BackTop
        },
        mixins:[itemListenerMixin,bottomBarMixin], // 将js 混入vue
        data(){
            return {
                result:null,
                banners:[],
                recommends:[],
                isBackTop:false,
                currentType:'pop',
                tabOffsetTop:0,

                saveY:0,


              goods:{
                  pop:{
                    page:0,
                    list:[]
                  },
                  new:{
                    page:0,
                    list:[]
                  },
                  sell:{
                    page:0,
                    list:[]
                  }
              }

            }
        },
        computed:{
          showGoods(){
            return  this.goods[this.currentType].list;
          }
        },
        created() {
          // 请求多个数据
          this.getHomeMultData();
          this.getHomeGoods('pop')
          this.getHomeGoods('new')
          this.getHomeGoods('sell')


        },

        methods:{
          getHomeMultData(){
            getHomeMultData().then(res=>{
              this.banners=res.data.data.banner.list;
              this.recommends=res.data.data.recommend.list;
            })
          },
          getHomeGoods(type){
            const page=this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
                  this.goods[type].list.push(...res.data.data.list)
                  this.goods[type].page+=1
              this.$refs.scroll.finishPullUp()
            })
          },

          homeBtnGoodsType(t,i){

            switch(t){
             case '流行':
                  this.currentType='pop'
               break;
             case '新款':
               this.currentType='new'
               break;
             case '精选':
               this.currentType='sell'
               break;
               default:
                 break;
           }
              this.$refs.tabControlOne.currentIndex=i;
            this.$refs.tabControlTwo.currentIndex=i;

          },


          homeBtnPosition(position){
            // 1、判断BackTop 是否显示
            this.isBackTop=Math.abs(position.y)<1000 ? false:true

            // 2、决定tabControl 是否吸顶
            this.isShowBackTop=Math.abs(position.y)>this.tabOffsetTop ?  true : false

          },

          homePullingUp(){
            this.getHomeGoods(this.currentType)
          },
          homeImageItems(){
            // 赋值
            this.tabOffsetTop=this.$refs.tabControlOne.$el.offsetTop

          }
        },
        destroyed() {
            console.log("home组件销毁");
           // app的keep-alive 标签 可以让destoryed 消失
        },
        activated() {
          /*console.log("home组件进入活跃状态");*/
          this.$refs.scroll.scrollTo(0,this.saveY,500)
          // 为了为避免this.saveY 为0 ，最好刷新一次
          this.$refs.scroll.refresh();
        },
        deactivated() {
          /*  console.log("home组件不活跃")*/
          // 赋值
          this.saveY=this.$refs.scroll.getSaveY();
        }


      }
</script>

<style scoped>
  .home{
    padding-top:44px;
    height: 100vh;
    position:relative;
  }
  .home-bar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index:9;

  }
  .home-tab-control{
    position: sticky;
    top:44px;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


  /*.content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }*/
</style>
