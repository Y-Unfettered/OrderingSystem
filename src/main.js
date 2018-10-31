import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
Vue.config.productionTip = false

//配置url
axios.defaults.baseURL = 'https://pizzaweb-f6547.firebaseio.com/'
//全局配置axios
Vue.prototype.Axios = axios



router.beforeEach((to, from, next) => {
  var isLogin = store.state.isLogin;
  //未登录
  if (!isLogin) {
    if (to.name == "registerLink") {
      next()
    }else if (to.name !== "loginLink") {
      router.push({name: 'loginLink'})
      alert('您还没有登录，请您先登录再操作！！')
    } else {
      next();
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')