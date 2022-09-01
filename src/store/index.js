import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },

  getters: {},

  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    },
  },

  actions: {
    addPost({ commit }, post) {
      commit("addPost", post);
    },
  },
});
