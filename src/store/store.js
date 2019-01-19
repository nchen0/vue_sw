import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { films: [] },
  getters: {},
  mutations: {
    getFilms: function(state, payload) {
      state.films = payload;
    }
  },
  actions: {
    getFilms: function(context) {
      axios.get("https://swapi.co/api/films").then(res => {
        console.log("res is: ", res);
        context.commit("getFilms", res.data.results);
      });
    }
  }
});
