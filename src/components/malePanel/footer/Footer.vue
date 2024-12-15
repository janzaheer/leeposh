<template>
  <div>
    

<footer class="bg-white dark:bg-slate-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <RouterLink to="/" class="flex items-center">
                  <img src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Lee-Posh-Male-Logo.png" class="h-10 me-3 bg-white" alt="FlowBite Logo" />
                  <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Leeposh</span> -->
              </RouterLink>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 ms-10">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-goldColor">Address</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">House No. 230/C, Panch Footy Roundabout, Samungli Road, Housing Scheme, Quetta, 87312.</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-goldColor">Conatct Us</h2>
                  <nav class="list-none">
                    <li class="space-y-1">
                        <a href="#" class="block text-gray-500 dark:text-gray-400 hover:underline">
                        info@leeposh.pk
                        </a>
                        <a href="#" class="block text-gray-500 dark:text-gray-400 hover:underline">
                            081-2503749
                        </a>
                        <a href="#" class="block text-gray-500 dark:text-gray-400 hover:underline">
                            +92335-4704701
                        </a>
                    </li>
                </nav>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Leeposh</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/leeposhh?igsh=ZHdyc3YwanY1MWVp" class="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5">
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
          </div>
      </div>
    </div>
</footer>

  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'Footer',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>