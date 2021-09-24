import Vue from "vue"
import VueRouter from  "vue-router"


const Home =()=>import("../views/home/Home")
const Card =()=>import("../views/card/Card")
const  Cate=()=>import("../views/category/Cate")
const Profile =()=>import("../views/profile/Profile")
const Detail=()=>import("../views/detail/Detail")
const Cart=()=>import("../views/cart/Cart")

Vue.use(VueRouter)

const   routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/card',
    component: Card
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/cate',
    component: Cate
  },{
    path:'/detail/:iid',
    component: Detail
  },{
    path:'/cart',
    component: Cart
  },

]
const router=new VueRouter({
  routes,
  mode:'history'
})

export default  router

