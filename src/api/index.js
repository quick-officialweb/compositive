/* ------------------------------------- 请求全局封装 ------------------------------------- */
import axios from 'axios'
import qs from 'qs'
import cookie from 'js-cookie'  //使用文档：https://www.toutiao.com/i6801506489014944269/?tt_from=weixin&utm_campaign=client_share&wxshare_count=1&timestamp=1592666186&app=news_article&utm_source=weixin&utm_medium=toutiao_android&req_id=20200620231626010016026082135083D6&group_id=6801506489014944269


axios.defaults.baseURL = "/api";  // 请求基地址
// axios.defaults.timeout = 20000;  // 超时时间


// 请求拦截
axios.interceptors.request.use(
  (request) => {
    // console.log(request.data)
    if (location.pathname != '/login') {
      if (sessionStorage.getItem('token')) {
        request.headers = {
          'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8',
          'token': sessionStorage.getItem('token'),
        }
        if (request.method == 'post' || request.method == 'put') {
          for (let i in request.data) {
            if (request.data[i] instanceof Object) {
              request.data[i] = JSON.stringify(request.data[i]);
            }
          }
          request.data = qs.stringify(request.data);
        }
      } else {
        alert("没有token！");
      }
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  });

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    // console.log(response)
    return response.data;
  },
  (error) => {
    switch (error.response.status) {
      case 400:
        console.error('请求错误');
        break;
      case 401:
        console.error('未授权，请登录');
        break;
      case 403:
        console.error('拒绝访问');
        break;
      case 404:
        console.error('服务器找不到请求的资源');
        break;
      case 408:
        console.error('请求超时');
        break;
      case 500:
        console.error('服务器内部错误');
        break;
      case 501:
        console.error('服务未实现');
        break;
      case 502:
        console.error('网关错误');
        break;
      case 503:
        console.error('服务不可用');
        break;
      case 504:
        console.error('网关超时');
        break;
      case 505:
        console.error('HTTP版本不受支持');
        break;
      default:
    }
    return Promise.reject(error)   // 返回接口返回的错误信息
  });




export default axios;
