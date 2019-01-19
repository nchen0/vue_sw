<template>
  <div>
    <div v-for="film in films">
      <Film v-bind:film="film"/>
    </div>
  </div>
</template>

<script>
import Film from "./Film.vue";
import Detail from "./Detail.vue";
export default {
  components: {
    Film: Film,
    Detail
  },
  data() {
    return {};
  },
  computed: {
    films() {
      return this.$store.state.films;
    }
  },
  created: function() {
    this.$store.dispatch("getFilms");
  }
};
</script>

<style>
</style>
