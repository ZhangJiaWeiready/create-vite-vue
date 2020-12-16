/*
 * @Author: zhangjiawei
 * @Date: 2020-12-16 20:34:24
 */
import { createStore } from 'vuex'
interface State {
  userName: string
}

export default createStore({
  state: {userName: "zhangjiawei"}
})