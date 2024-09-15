<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/maledashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-900">Leeposh Male</span>
        </RouterLink>
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goldColor dark:text-gray-400 dark:hover:bg-goldHoverColor dark:focus:ring-goldHoverColor"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div :class="[menuOpen ? 'block' : 'hidden', 'w-full md:block md:w-auto']" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
            <li>
              <a
                href="#"
                :class="isActive('#') ? 'text-goldColor underline underline-offset-8' : 'text-slate-900'"
                class="block py-2 px-3 hover:text-goldHoverColor hover:underline-offset-8 hover:underline"
              >Home</a>
            </li>
            <li>
              <a
                href="#services"
                :class="isActive('#services') ? 'text-goldColor underline underline-offset-8' : 'text-slate-900'"
                class="block py-2 px-3 hover:text-goldHoverColor hover:underline-offset-8 hover:underline"
              >Services</a>
            </li>
            <li>
              <a
                href="#about"
                :class="isActive('#about') ? 'text-goldColor0 underline underline-offset-8' : 'text-slate-900'"
                class="block py-2 px-3 hover:text-goldHoverColor hover:underline-offset-8 hover:underline"
              >About</a>
            </li>
            <li>
              <a
                href="#contact"
                :class="isActive('#contact') ? 'text-goldColor underline underline-offset-8' : 'text-slate-900'"
                class="block py-2 px-3 hover:text-goldHoverColor hover:underline-offset-8 hover:underline"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      menuOpen: false,
    };
  },

  mounted() {
    window.addEventListener('hashchange', this.updateActiveLink);
  },

  beforeDestroy() {
    window.removeEventListener('hashchange', this.updateActiveLink);
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    isActive(hash) {
      return window.location.hash === hash;
    },

    updateActiveLink() {
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>

</style>
