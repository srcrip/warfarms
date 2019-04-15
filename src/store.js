import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turn: 1,
    season: "Spring",
    resources: {
      men: 1,
      food: 1,
      seeds: 0,
      wood: 0,
      metals: 0,
    },
    hours: 168
  },
  mutations: {
    mutateResources: (s, p) => s.resources[p.kind] += p.amount,
    mutateHours: (s, n) => s.hours += n
  },
  actions: {

  }
})
