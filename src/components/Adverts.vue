<template>
  <section>
    <h2 class="text-center text-xl">News Sources</h2>
    <div class="text-left" v-for="(news, i) in allNews" :key="i">
      <h4>Jomia Prime</h4>
      <p>{{ news.author }}</p>
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
