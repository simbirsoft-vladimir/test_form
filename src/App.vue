<template>
  <div id="app">
    <main-layout />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "./components/MainLayout.vue";

export default Vue.extend({
  name: "App",
  components: {
    MainLayout,
  },
});
</script>
