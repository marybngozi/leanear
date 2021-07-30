<template>
  <section class="">
    <h2 class="text-center text-2xl">News</h2>
    <div class="text-center mt-10" v-show="!allNews.length">
      <i class="fa fa-spinner fa-3x animate-spin"></i>
    </div>

    <div v-show="allNews.length">
      <div v-for="(news, i) in allNews" :key="i">
        <NewsInfo :news="news" />
      </div>
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

<style scoped>
section {
  min-height: 200px;
}
</style>
