import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

export default new Store({
  modules: {
    home: {
      state: {
       height: 0
     }
    }
  }
})