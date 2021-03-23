<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  components: { Home },
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
