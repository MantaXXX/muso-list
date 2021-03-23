<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Home, Navbar },
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
