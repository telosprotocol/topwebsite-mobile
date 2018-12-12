const top = {
  state: {
    balance: 0,
    give: 1,
    account: '',
    property: 'not created',
    count: 0,
    list: [],
    transactionList: [], // 最近的交易记录
    lcount: 0, // 最近交易记录当前页数
    code: '', // 分享码
    digest: '', // 摘要
    sign: '', // 签名
    showProp: false,
    moreShow: false,
    submitShow: false
  },
  mutations: {
    SetBalance: (state, balance) => {
      state.balance = balance
    },
    Setgive: (state, give) => {
      state.give = give
    },
    SetAccount: (state, account) => {
      state.account = account
    },
    SetProperty: (state, property) => {
      state.property = property
    },
    SetCount: (state, count) => {
      state.count = count
    },
    SetList: (state, list) => {
      state.list = list
    },
    SetTransaction: (state, transactionList) => {
      state.transactionList = transactionList
    },
    SetLcount: (state, lcount) => {
      state.lcount = lcount
    },
    setCode: (state, status) => {
      state.code = status
      localStorage.setItem('code', state.code)
    },
    // 随机生成的摘要
    SetDigest: (state, digest) => {
      state.digest = digest
    },
    // 随机生成的签名
    SetSign: (state, sign) => {
      state.digest = sign
    },
    SetShowProp: (state, showProp) => {
      state.showProp = showProp
    },
    SetMoreShow: (state, moreShow) => {
      state.moreShow = moreShow
    },
    SetSubmitShow: (state, submitShow) => {
      state.submitShow = submitShow
    }
  }
}
export default top
