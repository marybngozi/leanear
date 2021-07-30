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
        <button
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'home' ? 'active' : 'notActive'"
        >
          <a href="/">
            <span>Home</span>
          </a>
        </button>

        <button
          @click="setSearch('business')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'business' ? 'active' : 'notActive'"
        >
          <span>Business</span>
        </button>

        <button
          @click="setSearch('entertainment')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'entertainment' ? 'active' : 'notActive'"
        >
          <span>Entertainment</span>
        </button>

        <button
          @click="setSearch('general')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'general' ? 'active' : 'notActive'"
        >
          <span>General</span>
        </button>

        <button
          @click="setSearch('health')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'health' ? 'active' : 'notActive'"
        >
          <span>Health</span>
        </button>

        <button
          @click="setSearch('science')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'science' ? 'active' : 'notActive'"
        >
          <span>Science</span>
        </button>

        <button
          @click="setSearch('sports')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'sports' ? 'active' : 'notActive'"
        >
          <span>Sports</span>
        </button>

        <button
          @click="setSearch('technology')"
          class="py-4 px-4 w-full focus:outline-none flex justify-start bg-white md:pl-0 block md:bg-bluewood md:inline-block md:w-1/2 hover:bg-blumine hover:text-white"
          :class="activeHeader === 'technology' ? 'active' : 'notActive'"
        >
          <span>Technology</span>
        </button>

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
    setSearch(cat) {},
  },
};
</script>

<style scoped>
.active {
  background: #1f596d;
  color: white;
}
</style>
