<template>
    <div  id="detail">
      <detail-nav-bar  class="detail-nav-bar"  @btnClickNavbar="detailBtnClickNavbar" :currentNavbar="currentNavbar"  ></detail-nav-bar>
      <scroll  class="detail-scroll"  ref="scroll"  :probe-type="3"  @btnPosition="btnPosition">
        <detail-swiper  :topImages="topImages"></detail-swiper>
        <detail-base-info  :baseGoods="baseGoods"></detail-base-info>
        <detail-shop-info   :shop="shop"></detail-shop-info>
        <detail-goods-info   :detailGoodsInfo="detailGoodsInfo"  @imgLoadBtn="imgLoadBtn"></detail-goods-info>
        <detail-param-info ref="param"  :paramInfo="goodsParam"></detail-param-info>
        <detail-comment-info  ref="comment" :commentInfo="commentInfo" ></detail-comment-info>
        <goods-list    ref="recommends"  :goodsList="recommends"></goods-list>

      </scroll>
      <back-top  v-if="isShowBackTop"   @click.native="btnBackTop"    ></back-top>
      <detail-bottom-bar   @addToCart="addToCart"></detail-bottom-bar>

    </div>
</template>

<script>
  import DetailNavBar  from "./childComps/DetailNavBar"
  import DetailSwiper  from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from  "./childComps/DetailShopInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DetailParamInfo from "./childComps/DetailParamInfo"
  import DetailCommentInfo from "./childComps/DetailCommentInfo"
  import DetailBottomBar from "./childComps/DetailBottomBar"


  import GoodsList from "components/content/goodsList/GoodsList"

  import Scroll from "components/common/betterScroll/Scroll";
  import  {itemListenerMixin,bottomBarMixin}  from "common/mixin"

  import { mapActions } from "vuex"

  import {getDetail,BaseGoods,shop,GoodsParam,getRecommend}   from "network/detail"
  import BackTop from "components/content/backTop/BackTop";



    export default {
        name: "Detail",
      components:{
        BackTop,
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        BackTop,

      },
      mixins:[itemListenerMixin,bottomBarMixin],
      data(){
          return{
            iid:null,
            topImages:[],
            baseGoods:{},
            shop:{},
            detailGoodsInfo:{},
            goodsParam:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[0,600,1000,1500],
            currentNavbar:0,
          /*  isShowBackTop:false*/
          }
      },
      created() {
        // 1、获取到商品的id
        this.iid=this.$route.params.iid

        // 2、请求数据
        getDetail(this.iid).then(res=>{

          const  data=res.data.result;

          this.topImages=data.itemInfo.topImages;
          // 基本数据
          this.baseGoods=new  BaseGoods(data.itemInfo,data.columns,data.shopInfo.services)
          this.shop=new shop(data.shopInfo)

          // 获取商品的详情信息
          this.detailGoodsInfo=data.detailInfo;


          this.goodsParam=new  GoodsParam(data.itemParams.info,data.itemParams.rule)

          if (data.rate.cRate  !==  0){
              this.commentInfo=data.rate.list[0]
          }
        })

      //  3、请求推荐数据
        getRecommend().then(res=>{
          this.recommends=res.data.data.list;
        })
      },

      methods:{
          ...mapActions({
            add:'addCart'
          }),
        imgLoadBtn(){
          // 重新加载scroll
          this.$refs.scroll.refresh();
          // 当图片加载完毕：就能计算offsetTop 了
          this.themeTopYs=[]
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.param.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.recommends.$el.offsetTop-44)
          this.themeTopYs.push(Number.MAX_VALUE)

        },
        detailBtnClickNavbar(index){
          this.$refs.scroll.scrollTo(0,-[this.themeTopYs[index]])
        },
        // 滚动方法
        btnPosition(position){
            let    positionsY= Math.abs(position.y)
            let   length=this.themeTopYs.length

            for (let i=0 ;i<length-1;i++){

                if (this.currentNavbar!==i && (positionsY>=this.themeTopYs[parseInt(i)] && positionsY<this.themeTopYs[parseInt(i)+1])){
                  this.currentNavbar=i;
                  console.log(this.currentNavbar);
                }

            }
         /*// console.log(number,this.themeTopYs[1],this.themeTopYs[2],this.themeTopYs[3]);
            if (number<this.themeTopYs[1]){
              this.currentNavbar=0;
            }else   if (number<this.themeTopYs[2]){
              this.currentNavbar=1;
            }else   if (number<this.themeTopYs[3]){
              this.currentNavbar=2;
            }else{
              this.currentNavbar=3;
            }*/
         this.isShowBackTop= positionsY >= 1000
        },
        addToCart(){
          const product={}
          product.image=this.topImages[0];
          product.title=this.baseGoods.title;
          product.desc=this.detailGoodsInfo.desc;
          product.price=this.baseGoods.realPrice;
          product.iid=this.iid;

          // 利用vuex 存储购物车
          /*this.$store.dispatch("addCart",product);*/
          // 另一种使用vuex的actions里面的方法
          this.add(product).then((res)=>{
            this.$toast.show(res,3000)
          });

        }

      },

      destroyed() {
          //  在离开 组件时itemGoodsImage事件触发，将,this.listenerItemGoodsImage销毁
          this.$bus.$off("itemGoodsImage",this.listenerItemGoodsImage)
      }


    }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  /*  视图高度*/
    height: 100vh;
  }
  .detail-scroll{
    height: calc( 100% - 92px);
  }

 .detail-nav-bar{
    position: relative;
    z-index: 9;
   background-color: #ffffff;

 }
</style>
