<template>
  <form
    @submit.prevent="search()"
    class="bg-white p-1 items-center flex justify-between border-2 border-bluewood rounded"
  >
    <input
      v-model="searchParam"
      class="inline-block w-full text-sm leading-none text-blumine border-white focus:outline-none"
      placeholder="search news"
    />
    <button @click.prevent="search()">
      <i class="fa fa-search mx-1"></i>
    </button>
  </form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "PageSearch",
  data() {
    return {
      searchParam: null,
    };
  },
  methods: {
    ...mapMutations(["setSearchParam"]),

    ...mapActions(["searchNews"]),

    search() {
      if (!this.searchParam) {
        return;
      }

      // add search parameter to the store
      this.setSearchParam(this.searchParam);

      // dispatch search action
      this.searchNews();
    },
  },
};
</script>

<style></style>
