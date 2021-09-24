import   {debounce}  from "common/debounce/debounce"

export const  itemListenerMixin={
  data(){
    return{
      listenerItemGoodsImage:null,  // 函数
    }
  },
  mounted() {
    const refresh=debounce(this.$refs.scroll.refresh,500)
    // 利用事件总线
    this.listenerItemGoodsImage=()=>{
      refresh();
    }
    // 从总线接受发射的itemGoodsImage事件 执行 this.listenerItemGoodsImage 函数。
    this.$bus.$on('itemGoodsImage', this.listenerItemGoodsImage)

  },

}


export const bottomBarMixin={
  data() {
    return {
      isShowBackTop:false
    };
  },
  methods:{
    btnBackTop(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
  }


}





