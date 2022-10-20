import Vue from 'vue'
import App from './App.vue'
import '@ycwei/yui-layout/yui-layout.css'

import YuiLayout from '@ycwei/yui-layout/yui-layout.umd.min'

// import YUI from '@/packages'

Vue.use(YuiLayout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
