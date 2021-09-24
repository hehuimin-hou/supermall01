import  request from  "./request"

export  function getHomeMultData(){
  return  request({
    url:"/home/multidata"
  })
}


export  function   getHomeGoods(type,page){

  return  request({
    url:'/home/data',
    params:{
      type:type,
      page:page
    }
  })

}
