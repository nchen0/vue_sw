<template>
  <div>
    <div v-for="film in films">
      <Film v-bind:film="film"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Film from "./Film.vue";
import Detail from "./Detail.vue";
export default {
  components: {
    Film: Film,
    Detail
  },
  data() {
    return {
      films: []
    };
  },
  created: function() {
    axios.get("https://swapi.co/api/films").then(res => {
      /*
			there is no "id" field, just a URL one - so let's set it manually
			*/
      this.films = res.data.results.map(film => {
        let parts = film.url.split("/");
        film.id = parts[parts.length - 2];
        return film;
      });
    });
  }
};
</script>

<style>
</style>
