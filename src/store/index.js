import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

export default new Store({
  modules: {
    home: {
      state: {
      height: 0, // 自适应高度
       currentMenu: 'content' // 当前渲染的content区域组件的名称
     },
    mutations: {
      	modifyContent(currentMenu) {
          console.log(this)
     	}
     }
    }
  }
})