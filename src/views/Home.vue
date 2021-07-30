<template>
  <div>
    <Header class="sticky top-0" />
    <section class="flex flex-wrap">
      <main class="w-12/12 md:w-8/12">
        <News />
      </main>

      <aside class="w-12/12 md:w-4/12">
        <Adverts />
      </aside>
    </section>
    <Footer />
  </div>
</template>

<script>
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
};
</script>
