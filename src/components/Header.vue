<template>
  <header class="pt-3 bg-white border-b-2">
    <div class="block flex justify-between sm:space-x-3 xs:space-x-1 mx-3">
      <router-link to="/" class="">
        <div class="">
          <img
            class="w-32 h-14 md:w-48 md:h-16"
            src="../assets/images/logo.png"
            alt="logo"
          />
        </div>
      </router-link>

      <PageSearch class="hidden h-10 w-1/3 md:flex mt-4" />

      <button
        class="flex items-center md:hidden focus:outline-none w-10 h-10"
        @click="toggleMenu"
      >
        <i class="fa fa-bars fa-2x text-blumine"></i>
      </button>
    </div>

    <nav class="flex items-center flex-wrap sm:py-1 xs:py-1 relative">
      <div
        class="w-64 pb-0 absolute inset-y-0 right-0 text-md md:text-sm md:flex-grow md:flex md:justify-start md:bg-bluewood md:text-squeeze md:relative md:px-0"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <a
          href="/"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white block md:bg-bluewood md:inline-block md:w-3/12 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'home' ? 'active' : 'notActive'"
        >
          <span>Home</span>
        </a>

        <a
          href="/my-library"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white block md:bg-bluewood md:inline-block md:w-3/12 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'my-news' ? 'active' : 'notActive'"
        >
          <span>My Library</span>
        </a>

        <PageSearch class="bg-white py-2 block md:hidden" />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import PageSearch from "@/components/PageSearch.vue";
export default {
  name: "Header",
  components: {
    PageSearch,
  },
  computed: {
    ...mapGetters(["activeHeader"]),
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.active {
  background: #1f596d;
  color: white;
}
</style>
