<template>
  <section>
    <h2 class="text-center text-xl">News</h2>
    <div v-for="(news, i) in allNews" :key="i">
      <NewsInfo :news="news" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NewsInfo from "@/components/NewsInfo.vue";
export default {
  name: "News",
  components: {
    NewsInfo,
  },
  computed: {
    ...mapGetters(["allNews"]),
  },
};
</script>

<style></style>
