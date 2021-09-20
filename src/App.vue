<template>
  <div id="app">
    <main-layout>
      <realty-search-form />
    </main-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "./components/MainLayout.vue";
import RealtySearchForm from "./components/RealtySearchForm.vue";

export default Vue.extend({
  name: "App",
  components: {
    MainLayout,
    RealtySearchForm,
  },
});
</script>
