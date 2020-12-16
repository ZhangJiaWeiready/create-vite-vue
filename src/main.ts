/*
 * @Author: zhangjiawei
 * @Date: 2020-12-16 19:56:46
 */
import { createApp } from 'vue'
// 引入路由文件
import router from './router/index'
// 引入vuex文件
import store from './store/index'
import App from './App.vue'

import './index.css'

const app = createApp(App)
// 将router store 挂载到vue上
app.use(router)
app.use(store)
app.mount('#app')

