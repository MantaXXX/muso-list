<template>
  <div class="user-playlists">user</div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { document: playlists } = getCollection("playlists", [
      "userId",
      "==",
      user.value.uid,
    ]);

    return { playlists };
  },
};
</script>

<style>
</style>