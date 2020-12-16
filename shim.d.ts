/*
 * @Author: zhangjiawei
 * @Date: 2020-12-16 20:26:23
 */
// 全局声明vue
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent
  export default component
}