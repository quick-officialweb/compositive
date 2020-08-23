import http from './index'


export default {
  // 通用POST请求
  isPost: (link, data) => {
    return http.post(link, data);
  },

  // 通用GET请求
  isGet: (link, data) => {
    return http.get(link, {
      params: data  // 此data需要是：{}格式
    })
  },

  
}

