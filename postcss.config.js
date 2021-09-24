module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth: 375,//视窗的宽度，对应的是我们设计稿的宽度。
      viewportHeight: 667,//视窗的高度，对应的是我们设计稿的高度。
      unitPrecision: 5,// 指定 ‘px’ 转换成为的视窗单位，建议使用vw
      selectorBlackList:['ignore','tab-bar','tab_bar_item'], // 指定不需要转换的类，后面再讲
      minPixelValue:1 ,// 小于 或等于 '1px'不转换为 视窗单位
      exclude:[/TabBar/]
    }
  }
}
