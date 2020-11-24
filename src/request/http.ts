// import axios from 'axios'
import axios from '@/js_sdk/gangdiedao-uni-axios'
import store from '@/store/index'


// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://192.168.1.53:8001/ga';
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = 'https://www.yeheiot.top';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://www.yeheiot.com'
}
//真机获取  
/* axios.defaults.adapter = function (config:any) {  
  return new Promise((resolve, reject) => {  
      console.log(config)  
      var settle = require('axios/lib/core/settle');  
      var buildURL = require('axios/lib/helpers/buildURL');  
      uni.request({  
          method: config.method.toUpperCase(),  
          url: buildURL(config.url, config.params,config.paramsSerializer),  
          header: config.headers,  
          data: config.data,  
          dataType: config.dataType,  
          responseType: config.responseType,  
          sslVerify: config.sslVerify,  
          complete:function complete(response:any){  
              response = {  
                data: response.data,  
                status: response.statusCode,  
                errMsg: response.errMsg,  
                header: response.header,  
                config: config  
              };  

          settle(resolve, reject, response);  
          }  
      })  
  })  
} */

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg:string) => {    
  uni.showToast({        
      title: msg,        
      duration: 1000,        
      icon: 'none'    
  });
}

/** 
* 跳转登录页
* 携带当前页面路由，以期在登录页面完成登录后返回当前页面
*/
const toLogin = () => {
  uni.reLaunch({
      url:'/pages/login/login'
  });
}

/** 
* 请求失败后的错误统一处理 
* @param {Number} status 请求失败的状态码
*/
const errorHandle = (status:number, other:string) => {
  // 状态码判断
  switch (status) {
      // 401: 未登录状态，跳转登录页
      case 401:
          toLogin();
          break;
      // 403 token过期
      // 清除token并跳转登录页
      case 403:
          tip('登录过期，请重新登录');
          uni.removeStorageSync('token');
          store.commit('loginSuccess', null);
          setTimeout(() => {
              toLogin();
          }, 1000);
          break;
      // 404请求不存在
      case 404:
          tip('请求的资源不存在'); 
          break;
      default:
          console.log(other);   
      }}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12,withCredentials:true});

// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
* 请求拦截器 
* 每次请求前，如果存在token则在请求头中携带token 
*/ 
instance.interceptors.request.use(    
  (  config: { headers: { RUICHAOSESSIONID: string; }; }) => {        
      // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
      // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
      // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
      // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
      const token = store.state.token;        
      token && (config.headers.RUICHAOSESSIONID = token);        
      return config;    
  },    
  (  error: any) => Promise.reject(error))

// 响应拦截器
instance.interceptors.response.use(    
  // 请求成功
  (res: any) => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),    
  // 请求失败
  (error: any) => {
      const { response } = error;
      return Promise.reject(error);
      /* if (response) {
          // 请求已发出，但是不在2xx的范围 
          errorHandle(response.status, response.data.message);
          return Promise.reject(response);
      } else {
          // 处理断网的情况
          // eg:请求超时或断网时，更新state的network状态
          // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
          // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
          if (!window.navigator.onLine) {
             store.commit('changeNetwork', false);
          } else {
              return Promise.reject(error);
          }
      } */
  });

export default instance;
