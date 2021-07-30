import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const apiUrl = "https://newsapi.org/v2";
const apiKey = "89ce24b7eaee47239dd1ebdcd2f639aa";
const pageSize = "5";

const requestConfig = {
  headers: {
    Authorization: apiKey,
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeHeader: "home",
    location: "ng",
    newsFound: [],
    apikey: apiKey,
    searchParam: null,
  },

  getters: {
    activeHeader: (state) => {
      return state.activeHeader;
    },
    token: (state) => {
      return state.apikey;
    },

    allNews: (state) => {
      return state.newsFound;
    },
  },
  mutations: {
    setNews(state, details) {
      state.newsFound = details;
    },
    setSearchParam(state, payload) {
      state.activeHeader = payload;
    },
  },
  actions: {
    async searchNews({ commit }, searchParam) {
      try {
        if (!searchParam) {
          return;
        }

        const { data } = await axios.get(
          `${apiUrl}/everything?q=${searchParam}`,
          requestConfig
        );

        commit("setNews", data.articles);

        console.log(data);
      } catch (error) {
        console.log(err);
      }
    },
  },
  modules: {},
});
