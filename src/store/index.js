import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './task-store'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      tasks
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
