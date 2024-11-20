<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow mt-24">
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <p class="text-lg font-bold tracking-tight text-goldColor">
            Book Appointment
          </p>

          <div
            class="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-1 md:grid-cols-2 md:gap-x-2 lg:grid-cols-2 xl:gap-x-14">
            <div class="">
              <img alt="ecommerce" class="lg:w-full w-full lg:h-auto h-64 object-cover object-center rounded"
                :src="HairCareData[0]?.img" />
            </div>
            <div>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {{ HairCareData[0]?.title }}
              </h1>
              <p class="leading-relaxed mb-4">{{ HairCareData[0]?.description }}</p>
              <div class="w-full">
                <table class="w-full border-collapse bg-gray-100 text-left">
                  <thead class="bg-goldColor text-white">
                    <tr class="border-b border-gray-300">
                      <th class="py-2 px-4">
                        <h4 class="text-white">Services</h4>
                      </th>
                      <th class="py-2 px-4 text-center">
                        <h4 class="text-white">Price</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="cursor-pointer hover:bg-gray-50" v-for="item in HairCareData[0]?.data" :key="item.id">
                      <td class="py-2 px-4">{{ item.name }}</td>
                      <td class="py-2 px-4 text-center">
                        Rs.<span>{{ item.price }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-2xl my-14">
            <div>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {{ HairCareData[1].title }}
              </h1>
              <div class="">
                <table class="w-full border-collapse bg-gray-100 text-left">
                  <thead class="bg-goldColor text-white">
                    <tr class="border-b border-gray-300">
                      <th class="py-2 px-4">
                        <h4 class="text-white">Services</h4>
                      </th>
                      <th class="py-2 px-4 text-center">
                        <h4 class="text-white">Price</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="cursor-pointer hover:bg-gray-50" v-for="item in HairCareData[1].TreatmentData"
                      :key="item.id">
                      <td class="py-2 px-4">{{ item.name }}</td>
                      <td class="py-2 px-4 text-center">
                        Rs.<span>{{ item.price }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-2xl my-14">
            <div>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {{ HairCareData[3]?.title }}
              </h1>
              <div class="">
                <table class="w-full border-collapse bg-gray-100 text-left">
                  <thead class="bg-goldColor text-white">
                    <tr class="border-b border-gray-300">
                      <th class="py-2 px-4">
                        <h4 class="text-white">Services</h4>
                      </th>
                      <th class="py-2 px-4 text-center">
                        <h4 class="text-white">Price</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="cursor-pointer hover:bg-gray-50" v-for="item in HairCareData[3]?.KeratianData"
                      :key="item.id">
                      <td class="py-2 px-4">{{ item.name }}</td>
                      <td class="py-2 px-4 text-center">
                        Rs.<span>{{ item.price }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-6">
            <Whatsapp />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { HairCareData } from "../../../db/male-db";
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import Whatsapp from './../whatsapp/whatsapp-male.vue'
export default {
  name: "HairCareList",

  data() {
    return {
      HairCareData: HairCareData,
    };
  },
  components: {
    Header,
    Footer,
    Whatsapp
  },
  mounted() {
    window.scroll(0,0)
  },

  methods: {},
};
</script>
