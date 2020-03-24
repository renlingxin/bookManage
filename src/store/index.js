import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import routerTags from './modules/routerTags'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        routerTags
    },
    getters
})
export default store;