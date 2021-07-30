<template>
  <div class="mx-2 my-4 py-2 px-3 items-center shadow rounded">
    <h4 class="text-md font-bold">{{ news.title }}</h4>
    <p>{{ news.description }}</p>
    <p class="text-gray-600">
      <span>From </span>
      <span> {{ news.source.name }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "NewsInfo",
  props: {
    news: {
      type: Object,
    },
  },
};
</script>

<style></style>
