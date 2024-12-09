<template>
  <div>
    <footer class="text-gray-600 body-font">
      <div class="py-8 bg-slate-100 flex items-center justify-center">
        <div
          class="flex flex-wrap text-center md:text-left justify-center max-w-7xl"
        >
          <!-- Column 1 -->
          <div class="w-full md:w-1/3 px-4 mb-10">
            <RouterLink
              to="/"
              class="flex title-font font-medium items-center justify-center md:justify-start text-gray-900"
            >
              <img
                src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Female-Logo-Lee-Posh.png"
                class="h-10"
                alt="Logo"
              />
              <span class="ml-3 text-xl">Leeposh</span>
            </RouterLink>
            <p class="mt-2 text-sm text-gray-500">
              Leeposh Beauty Salon provides luxurious beauty and spa treatments
              tailored to enhance your natural beauty. Enjoy expert care and
              top-quality products in a relaxing environment.
            </p>
          </div>
          <!-- Column 2 -->
          <div class="w-full md:w-1/3 px-4 mb-10">
            <h2
              class="title-font font-medium text-goldColor tracking-widest text-xl mb-3"
            >
              Address
            </h2>
            <nav class="list-none">
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  House No. 230/C, Panch Footy Roundabout, Samungli Road,
                  Housing Scheme, Quetta, 87312
                </a>
              </li>
            </nav>
          </div>
          <!-- Column 3 -->
          <div class="w-full md:w-1/3 px-4 mb-10">
            <h2
              class="title-font font-medium text-goldColor tracking-widest text-xl mb-3"
            >
              Contact Us
            </h2>
            <nav class="list-none">
              <li class="space-y-1">
                <a href="#" class="block text-gray-600 hover:underline">
                  info@leeposh.pk
                </a>
                <a href="#" class="block text-gray-600 hover:underline">
                  081-2503749
                </a>
                <a href="#" class="block text-gray-600 hover:underline">
                  +923344443606
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div class="bg-pinkColor">
        <div
          class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
        >
          <p class="text-white text-sm text-center sm:text-left">
            © 2024 Leeposh —
            <a
              href="#"
              rel="noopener noreferrer"
              class="text-white ml-1"
              target="_blank"
              >@Copyright</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          >
            <a class="text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "FemaleFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
