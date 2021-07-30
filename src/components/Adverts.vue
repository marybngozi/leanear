<template>
  <section class="px-3">
    <h2 class="text-center text-xl">News Sources</h2>
    <div class="text-center mt-10" v-show="!allSources.length">
      <i class="fa fa-spinner fa-3x animate-spin"></i>
    </div>

    <div v-show="allSources.length">
      <div
        class="text-left p-2 border-b-2"
        v-for="(source, i) in allSources"
        :key="i"
      >
        <button @click="getNewsFrom(source.id)">
          <span>{{ source.name }}</span>
        </button>
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
    ...mapGetters(["allSources"]),
  },
  methods: {
    ...mapActions(["getNewsFrom"]),
  },
};
</script>

<style></style>
