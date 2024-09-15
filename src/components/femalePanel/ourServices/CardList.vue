<template>
  <div>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-pink-300 hover:bg-gray-100 dark:hover:bg-pink-400 transition-colors duration-300 cursor-pointer">
      <img class="rounded-t-lg h-80 w-full" :src="img" alt="" />
      <div class="p-1 text-center">
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',

  data() {
    return {

    };
  },
  props: {
    title: String,
    img: String,
  },
  mounted() {

  },

  methods: {

  },
};
</script>