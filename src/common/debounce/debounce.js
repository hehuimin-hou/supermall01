export  function debounce(func,delay){
  let timer=null
  return  function(...args){
    if(timer!=null)  clearTimeout(timer)
    timer=window.setInterval(()=>{
      func.apply(this,args)
    },delay)
  }
}
