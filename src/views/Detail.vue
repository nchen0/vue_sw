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
      film: ""
    };
  },

  created: function() {
    this.film = this.$store.state.films[this.$route.params.id];
  }
};
</script>

<style>
</style>
