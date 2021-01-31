//F5刷新会造成vux数据丢失，故而从缓存里拿
const state = {
  userInfo: {},
  count: 0,
  name: '周杰伦'
}

// getters
const getters = {
    showMsg(){
        return '哈哈哈哈'
    }
}

// actions
const actions = {
  queryUserInfo({
    dispatch,
    commit
  }, payload) {
    commit('setUserInfo', payload)
    // const data = await queryUserInfo();
    // commit('setUserInfo', data.data);
  },
  quit({commit}){
      commit('quit')
  }
}

// mutations
const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setCount(state, count) {
    state.count = count||++state.count
    sessionStorage.setItem('count', state.count)
  },
  quit(state){
    state.userInfo = {}
    state.count = 0
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('count')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
