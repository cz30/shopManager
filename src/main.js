import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/config/element'
import 'element-ui/lib/theme-chalk/index.css';
//导入全局css
import './assets/css/global.css'
import  axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL='http://192.168.0.134:8888/api/private/v1/'
// 请求拦截器 保证拥有获取数据的权限
axios.interceptors.request.use(config =>{
  console.log(config);
  config.headers.Authorization=window.sessionStorage.getItem('token')
  // 必须return config
  return config
})

Vue.config.productionTip = false
Vue.prototype.$http=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
