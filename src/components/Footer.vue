<template>
  <footer class="flex items-center justify-center bg-blumine h-20 text-white">
    <p>&copy; Leanear {{ year }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
