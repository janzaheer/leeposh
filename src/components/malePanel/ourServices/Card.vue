<template>
  <div>
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-goldColor hover:bg-gray-100 dark:hover:bg-goldHoverColor transition-colors duration-300 cursor-pointer"
    >
      <img class="rounded-t-lg h-80 w-full" :src="img" alt="" />

      <div class="p-1 text-center">
        <h5
          class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Card",

  data() {
    return {};
  },
  props: {
    title: String,
    img: String,
  },

  mounted() {},

  methods: {},
};
</script>
