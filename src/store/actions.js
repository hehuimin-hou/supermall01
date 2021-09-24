import {ADD_COUNTER,ADD_TO_CART} from "./mutations-type"
export  const actions ={
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      // 先判断购物车 是不是有此商品
      let oldProduct=context.state.cartList.find( (item)=>    payload.iid === item.iid)

      if (oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve('商品数量加一')
      }else{
        payload.count=1
        context.commit(ADD_TO_CART,payload)
        resolve('添加商品成功')
      }
    })


  }
}
