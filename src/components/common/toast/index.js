import Toast from  "./Toast"

const obj={}

//当main.js 文件执行到Vue.use(Toast) 时可以疏通。
obj.install=function (Vue) {

  //1、创建组件构造器。
  const toastConstrustor=Vue.extend(Toast)
  //2、new 的方式，根据组件构造器，可以创建一个组件对象。
  const toast=new toastConstrustor();
  //3、将组件对象手动挂载到某一个元素上。
  toast.$mount(document.createElement("div"))

  // toast.$el对应的就是 div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast=toast

}


export default obj
