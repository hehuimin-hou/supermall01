import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from  "./store"

import FastClick from "fastclick"
// 解决移动端延时300问题
FastClick.attach(document.body)
Vue.config.productionTip = false

import VueLazyload from "vue-lazyload";
// 使用懒加载的图片
Vue.use(VueLazyload,{
  loading:require("./assets/image/logo.png")
})



import Toast  from "components/common/toast"
// 在此安装Toast 插件
Vue.use(Toast)
// 创建事件总线
Vue.prototype.$bus=new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
