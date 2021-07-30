<template>
  <div>
    <Header class="sticky top-0" />
    <section class="md:flex md:flex-wrap">
      <main class="w-12/12 md:w-9/12">
        <News :showLib="true" />
      </main>

      <aside class="w-12/12 mt-16 md:w-3/12 md:border-l-2 md:mt-0">
        <Adverts />
      </aside>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
// @ is an alias to /src
import Header from "@/components/Header.vue";
import News from "@/components/News.vue";
import Adverts from "@/components/Adverts.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    News,
    Adverts,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    this.setActive("my-news");
    this.getSources();
  },
  methods: {
    ...mapMutations(["setActive"]),
    ...mapActions(["getSources"]),
  },
};
</script>
