<template>
  <div>
    <li>{{film.title}}</li>
    <Detail v-bind:film="film"></Detail>
  </div>
</template>

<script>
import Detail from "./Detail.vue";
export default {
  components: {
    Detail
  },
  props: ["film"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
