/*
 * @Author: zhangjiawei
 * @Date: 2020-12-16 20:30:01
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// 在Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式，此处使用的是hash模式 # 
  history: createWebHashHistory(),
  // 路由地址
  routes: []
})