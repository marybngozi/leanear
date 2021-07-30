<template>
  <div class="mx-2 my-4 py-2 px-3 items-center shadow rounded">
    <h4 class="text-md font-bold">{{ news.title }}</h4>
    <p>{{ news.description }}</p>

    <div class="flex space-x-5">
      <p class="text-gray-600">
        <span>From </span>
        <span> {{ news.source.name }}</span>
      </p>

      <button
        v-if="showLib"
        @click="removeFromLibrary(news.uid)"
        class="text-gray-600 text-sm focus:outline-none hover:outline-none"
      >
        <i class="far fa-trash-alt"></i> Remove from library
      </button>

      <button
        v-else
        @click="add()"
        class="text-gray-600 text-sm focus:outline-none hover:outline-none"
      >
        <i class="far fa-save"></i> Save for later
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NewsInfo",
  props: {
    news: {
      type: Object,
    },
    showLib: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations(["addToLibrary", "removeFromLibrary"]),

    add() {
      this.addToLibrary(this.news);
    },
  },
};
</script>

<style></style>
