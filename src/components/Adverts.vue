<template>
  <div>
    <section class="">
      <h2 class="text-center text-xl bg-blumine text-white py-2">
        News Category
      </h2>

      <div class="px-3 mt-3">
        <label for="category" class="block text-sm font-medium text-gray-700">
          Select Category
        </label>
        <select
          id="category"
          name="category"
          v-model="category"
          class="mt-1 block w-7/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm md:w-full focus:outline-none focus:ring-bluewood focus:border-bluewood"
        >
          <option
            class="text-sm"
            v-for="(cat, i) in allCategories"
            :key="i"
            :value="cat"
          >
            {{ cat }}
          </option>
        </select>

        <button
          class="py-2 px-3 mt-2 w-7/12 border border-transparent text-white bg-bluewood md:w-full focus:outline-none hover:outline-none"
          @click="getCategory()"
        >
          <span>Show News from Category</span>
        </button>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="text-center text-xl bg-blumine text-white py-2">
        News Sources
      </h2>

      <div class="px-3 mt-3">
        <label for="source" class="block text-sm font-medium text-gray-700">
          Select News source
        </label>
        <select
          id="source"
          name="source"
          v-model="source"
          class="mt-1 block w-7/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm md:w-full focus:outline-none focus:ring-bluewood focus:border-bluewood"
        >
          <option
            class="text-sm"
            v-for="(source, i) in allSources"
            :key="i"
            :value="source.id"
          >
            {{ source.name }}
          </option>
        </select>

        <button
          class="py-2 px-3 mt-2 w-7/12 border border-transparent text-white bg-bluewood md:w-full focus:outline-none hover:outline-none"
          @click="getSource()"
        >
          <span>Show News from Source</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import NewsInfo from "@/components/NewsInfo.vue";
export default {
  name: "News",
  components: {
    NewsInfo,
  },
  data() {
    return {
      category: null,
      source: null,
    };
  },
  computed: {
    ...mapGetters(["allSources", "allCategories"]),
  },
  methods: {
    ...mapMutations(["setSearchSource", "setSearchCategory"]),

    ...mapActions(["getNewsFrom", "getFromCategory"]),

    getCategory() {
      // add search parameter to the store
      this.setSearchCategory(this.category);

      // dispatch search action
      this.getFromCategory();
    },

    getSource() {
      // add search parameter to the store
      this.setSearchSource(this.source);

      // dispatch search action
      this.getNewsFrom();
    },
  },
};
</script>

<style></style>
