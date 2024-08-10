<template>
    <div>
        <!-- <div v-for="data in servicesData" :key="data.id"> -->
            <!-- <RouterLink :to='data.url'> -->
                <div
                    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-300 hover:bg-gray-100 dark:hover:bg-slate-400 transition-colors duration-300 cursor-pointer">

                    <img class="rounded-t-lg h-56 w-full" :src="img" alt="" />

                    <div class="p-1 text-center">

                        <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ title }}</h5>
                        <!-- <p class="mb-3 font-normal text-white dark:text-white">{{ data.title2 }}</p> -->
                    </div>
                </div>
            <!-- </RouterLink> -->

        <!-- </div> -->
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'Card',

    data() {
        return {

        };
    },
    props:{
        title:String,
        img:String,
    },

    mounted() {

    },

    methods: {

    },
};
</script>