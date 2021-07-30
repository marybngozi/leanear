import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { setStorageItem, getStorageItem } from "../utils";

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
    pageTitle: "Top Headlines",
    page: 1,
    totalPages: 1,
    countryCode: "ng",
    location: "Nigeria",
    newsFound: [],
    library: getStorageItem("mynews") || [],
    sources: [],
    categories: [
      "Business",
      "Entertainment",
      "General",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ],
    apikey: apiKey,
    searchParam: null,
    source: null,
    category: null,
    lastQuery: "headline",
  },

  getters: {
    page: (state) => {
      return state.page;
    },

    activeHeader: (state) => {
      return state.activeHeader;
    },

    allNews: (state) => {
      return state.newsFound;
    },

    libraryNews: (state) => {
      return state.library;
    },

    allSources: (state) => {
      return state.sources;
    },

    allCategories: (state) => {
      return state.categories;
    },

    pageTitle: (state) => {
      return state.pageTitle;
    },

    location: (state) => {
      return state.location;
    },

    paginate: (state) => {
      return `&pageSize=${pageSize}&page=${state.page}`;
    },

    totalPages: (state) => {
      return state.totalPages;
    },

    lastQuery: (state) => {
      return state.lastQuery;
    },
  },

  mutations: {
    setActive(state, details) {
      state.activeHeader = details;
    },
    setitle(state, details) {
      state.pageTitle = details;
    },
    setNews(state, details) {
      state.newsFound = details;
    },
    setSources(state, details) {
      state.sources = details;
    },
    setSearchParam(state, payload) {
      state.searchParam = payload;
    },
    setSearchSource(state, payload) {
      state.source = payload;
    },
    setSearchCategory(state, payload) {
      state.category = payload;
    },
    addToLibrary(state, payload) {
      // make sure payload is of correct type
      if (!payload) {
        return;
      }

      // create a uid for the news
      payload.uid = uuidv4();

      state.library.push(payload);

      setStorageItem("mynews", state.library);
    },
    removeFromLibrary(state, id) {
      // make sure payload is of correct type
      if (!id) {
        return;
      }

      state.library = state.library.filter(({ uid }) => uid !== id);

      setStorageItem("mynews", state.library);
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, pages) {
      state.totalPages = Math.ceil(Number(pages) / pageSize);
    },
  },

  actions: {
    // get lat and long, get country code
    async getLocation({ state }) {
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
        }

        // get the countryCode
        const country = await axios.get(
          `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=makor`
        );

        state.countryCode = country.data.countryCode.toLowerCase();
        state.location = country.data.countryName;
      } catch (err) {
        console.log(err);
      }
    },

    // get all news source
    async getSources({ commit }) {
      try {
        const { data } = await axios.get(
          `${apiUrl}/top-headlines/sources`,
          requestConfig
        );

        commit("setSources", data.sources);
      } catch (err) {
        console.log(err);
      }
    },

    // get the news from selelcted category
    async getFromCategory({ commit, getters, state }) {
      try {
        if (!state.category) {
          return;
        }

        const { data } = await axios.get(
          `${apiUrl}/top-headlines?category=${state.category}${getters.paginate}`,
          requestConfig
        );

        if (!data.articles.length) {
          return;
        }

        commit("setNews", data.articles);

        commit("setitle", `${state.category} News`);

        // for pagination purpose
        state.lastQuery = "category";
      } catch (err) {
        console.log(err);
      }
    },

    // get the news from selected source
    async getNewsFrom({ commit, getters, state }) {
      try {
        if (!state.source) {
          return;
        }

        const { data } = await axios.get(
          `${apiUrl}/top-headlines?sources=${state.source}${getters.paginate}`,
          requestConfig
        );

        if (!data.articles.length) {
          return;
        }

        commit("setNews", data.articles);

        commit("setitle", data.articles[0].source.name);

        // for pagination purpose
        state.lastQuery = "source";
      } catch (err) {
        console.log(err);
      }
    },

    // get lat and long, get country code and get location headline
    async getHeadline({ commit, state, getters }) {
      try {
        const { data } = await axios.get(
          `${apiUrl}/top-headlines?country=${state.countryCode}${getters.paginate}`,
          requestConfig
        );

        commit("setNews", data.articles);

        commit("setTotalPages", data.totalResults);

        commit("setitle", `Top Headlines in ${state.location}`);

        // for pagination purpose
        state.lastQuery = "headline";
      } catch (err) {
        console.log(err);
      }
    },

    // get the new using the search parameter
    async searchNews({ commit, getters, state }) {
      try {
        if (!state.searchParam) {
          return;
        }

        const { data } = await axios.get(
          `${apiUrl}/everything?q=${state.searchParam}${getters.paginate}`,
          requestConfig
        );

        if (!data.articles.length) {
          return;
        }

        commit("setNews", data.articles);

        commit(
          "setitle",
          `Search result of News related to ${state.searchParam.toLowerCase()}`
        );

        // for pagination purpose
        state.lastQuery = "search";
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
