<template>
  <section class="">
    <h2 v-if="showLib" class="text-center text-2xl bg-blumine text-white py-2">
      Saved News
    </h2>

    <h2 v-else class="text-center text-2xl bg-blumine text-white py-2">
      {{ pageTitle }}
    </h2>

    <div
      class="text-center text-gray-500 mt-10"
      v-if="!showNews.length && !showLib"
    >
      <i class="fa fa-spinner fa-3x animate-spin"></i>
      <br />
      <span>Getting news...</span>
    </div>

    <div
      class="text-center text-gray-500 mt-10"
      v-if="!showNews.length && showLib"
    >
      <img
        class="w-64 h-64 mx-auto md:w-50 md:h-20"
        src="../assets/images/no-data.svg"
        alt="no-data icon"
      />
      <br />
      <span>No News saved yet</span>
    </div>

    <div v-show="showNews.length">
      <div v-for="(news, i) in showNews" :key="i">
        <NewsInfo :news="news" :showLib="showLib" />
      </div>

      <!-- for pagination -->
      <div class="w-full">
        <div class="flex justify-center inline-block mx-10 shadow-md">
          <button
            class="px-4 py-3 focus:outline-none hover:outline-none"
            v-if="page != 1"
            @click="setPageNum(null, 'a')"
          >
            ←
          </button>
          <button
            class="px-4 py-3 focus:outline-none hover:outline-none"
            v-for="pageNum in pagesArr.slice(page - 1, page + 5)"
            :key="pageNum"
            @click="setPageNum(pageNum, null)"
          >
            {{ pageNum }}
          </button>
          <button
            class="px-4 py-3 focus:outline-none hover:outline-none"
            @click="setPageNum(null, 'm')"
            v-if="page < pagesArr.length"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import NewsInfo from "@/components/NewsInfo.vue";
export default {
  name: "News",
  components: {
    NewsInfo,
  },
  props: {
    showLib: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pageN: 1,
    };
  },
  computed: {
    ...mapGetters([
      "allNews",
      "libraryNews",
      "pageTitle",
      "page",
      "totalPages",
      "lastQuery",
    ]),

    pagesArr() {
      return Array(this.totalPages)
        .fill(1)
        .map((x, y) => x + y);
    },

    showNews() {
      return this.showLib ? this.libraryNews : this.allNews;
    },
  },
  methods: {
    ...mapMutations(["setPage"]),

    ...mapActions([
      "getHeadline",
      "getFromCategory",
      "getNewsFrom",
      "searchNews",
    ]),

    setPageNum(n, k) {
      if (!k) {
        this.pageN = n;
        this.setPage(n);
      } else if (k == "a") {
        this.setPage(this.pageN++);
      } else {
        this.setPage(this.pageN--);
      }

      this.getPageData();
    },

    getPageData() {
      switch (this.lastQuery) {
        case "headline":
          // code block
          this.getHeadline();
          break;
        case "category":
          // code block
          this.getFromCategory();
          break;
        case "source":
          // code block
          this.getNewsFrom();
          break;
        case "search":
          // code block
          this.searchNews();
          break;
        default:
        // code block
      }
    },
  },
};
</script>

<style scoped>
section {
  min-height: 400px;
}
</style>
