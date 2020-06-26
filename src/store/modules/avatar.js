const avatar = {
  state: {
    template: null,
    avatar: null
  },

  mutations: {
    SET_TEMPLATE: (state, template) => {
      state.template = template;
      console.log(state.template);
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
      console.log(state.avatar);
    }
  },

  actions: {
    // 设置模板
    setTemplate({ commit }, template) {
      return new Promise(resolve => {
        commit("SET_TEMPLATE", template);
        resolve();
      });
    },
    // 设置裁剪后的头像
    setAvatar({ commit }, avatar) {
      return new Promise(resolve => {
        commit("SET_AVATAR", avatar);
        resolve();
      });
    }
  }
};

export default avatar;
