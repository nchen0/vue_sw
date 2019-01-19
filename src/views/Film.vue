<template>
  <div>
    <li>
      <router-link :to="{name: 'film', params: {id:film.url.split('/')[5]} }">{{ film.title }}</router-link>
    </li>
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
