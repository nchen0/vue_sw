<template>
  <div>
    <h2>{{film.title}}</h2>
    <p v-if="film.director">
      Director: {{film.director}}
      <br>
      Released: {{film.release_date}}
      <br>
    </p>

    <p>{{film.opening_crawl}}</p>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      film: {}
    };
  },
  created: function() {
    console.log("params.id: ", this.$route);
    fetch("https://swapi.co/api/films/" + this.$route.params.id)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.film = res;
      });
  }
};
</script>

<style>
</style>
