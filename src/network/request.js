import  axios from "axios"

export   default  function request(config){

    const instance=axios.create({
      //http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1
      //baseURL:"http://123.207.32.32:8000",
      baseURL:"http://152.136.185.210:7878/api/hy66",
      timeout:50000
    })

  instance.interceptors.request.use(config=>{
      return  config;
  },error => {
    console.log(error)
  })

  instance.interceptors.response.use(config=>{
    return  config;
  },error => {
    console.log(error)
  })

  return instance(config);

}
