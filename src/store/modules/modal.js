const modal = {
  state: {
    createModal: false,
    rewardModal: false,
    requestModal: false
  },
  mutations: {
    setCreateModalShow: (state, status) => {
      state.createModal = status
    },
    setRewardModalShow: (state, status) => {
      state.rewardModal = status
    },
    setRequestModalShow: (state, status) => {
      state.requestModal = status
    }
  }
}
export default modal
