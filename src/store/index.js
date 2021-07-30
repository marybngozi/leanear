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
    sources: [],
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

    allSources: (state) => {
      return state.sources;
    },
  },
  mutations: {
    setNews(state, details) {
      state.newsFound = details;
    },
    setSources(state, details) {
      state.sources = details;
    },
    setSearchParam(state, payload) {
      state.activeHeader = payload;
    },
  },
  actions: {
    async getSources({ commit }) {
      try {
        const { data } = await axios.get(
          `${apiUrl}/top-headlines/sources`,
          requestConfig
        );

        commit("setSources", data.sources);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },

    async getNewsFrom({ commit }, source) {
      try {
        if (!source) {
          return;
        }

        const { data } = await axios.get(
          `${apiUrl}/top-headlines?sources=${source}`,
          requestConfig
        );

        commit("setNews", data.articles);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },

    // get lat and long, get country code and get location headline
    async getHeadline({ commit }) {
      try {
        let lat = 8.992459,
          lng = 7.4678353,
          error;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((d) => {
            lat = d.coords.latitude;
            lng = d.coords.longitude;
          });
        } else {
          error = "Geolocation is not supported by this browser.";
          return;
        }

        // get the countryCode
        const country = await axios.get(
          `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=makor`
        );

        const countryCode = country.data.countryCode.toLowerCase();

        const { data } = await axios.get(
          `${apiUrl}/top-headlines?country=${countryCode}`,
          requestConfig
        );

        commit("setNews", data.articles);
      } catch (err) {
        console.log(err);
      }
    },

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
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
