<template>
  <div class="">
    <Head />
    <div class="bg-white" id="">
      <div class="mt-[100px] w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[100vh]">
        <div class="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1">
          <div class="relative flex flex-col w-full h-full bg-white border border-gray-200 rounded-lg shadow">
            <RouterLink to="/maledashboard">
              <img class="rounded-t-lg w-full h-full sm:h-full md:h-full lg:h-[100vh] object-cover"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt=""/>
              <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <!-- Logo Section -->
                <div class="text-center">
                  <img src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Lee-Posh-Male-Logo.png"
                    class="w-full h-[100px]"
                    alt="Flowbite Logo"/>
                  <!-- <h1
                    class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold"
                  >
                    Logo
                  </h1> -->
                  <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-body text-white drop-shadow-xl">
                    Gents
                  </h2>
                </div>
              </div>
            </RouterLink>
          </div>
          <div class="relative flex flex-col w-full h-full bg-white border border-gray-200 rounded-lg shadow">
            <RouterLink to="/femaledashboard">
              <img class="rounded-t-lg w-full h-full sm:h-full md:h-full lg:h-[100vh] object-cover"
                src="https://plus.unsplash.com/premium_photo-1672427276594-a7ce1f7778dc?q=80&w=3260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""/>
              <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <!-- Logo Section -->
                <div class="text-center">
                  <img
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Female-Logo-Lee-Posh.png"
                    class="w-full h-[100px]"
                    alt="Flowbite Logo"/>
                  <h2
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-body text-white drop-shadow-xl">
                    Ladies
                  </h2>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../home/Head/Head.vue";
import { RouterLink } from "vue-router";
export default {
  name: "Home",
  components: {
    Head,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
