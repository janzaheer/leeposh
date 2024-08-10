<template>
    <div>
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="mt-[50px] relative w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[100vh]">
                <!-- Item -->
                <div v-for="(image, index) in images" :key="index" :class="{
                    block: index === currentIndex,
                    hidden: index !== currentIndex,
                }" class="duration-700 ease-in-out">
                    <img :src="image.url"
                        class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..." />
                        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-white drop-shadow-xl text-center">
                            {{ image.title }}
                        </h2>
                        <p class="text-lg sm:text-xl md:text-2xl lg:text-4xl font-body text-white mt-4 text-center">
                            {{ image.description }}
                        </p>
                        <button
                            class="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                            {{ image.buttonText }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button v-for="(image, index) in images" :key="index" type="button" :class="{
                    'bg-white': index === currentIndex,
                    'bg-gray-400': index !== currentIndex,
                }" class="w-3 h-3 rounded-full" aria-label="Slide" @click="setCurrentIndex(index)"></button>
            </div>

            <!-- Slider controls -->
            <button type="button"
                class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                @click="prevSlide">
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                @click="nextSlide">
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import Image1 from '../../../assets/female/bg-seraat2.jpg'
import Image2 from '../../../assets/female/bg-seraat3.jpg'
import Image3 from '../../../assets/female/bg-seraat5.jpg'
export default {
    name: "Slider",
    data() {
        return {
            currentIndex: 0,
            images: [
                {
                    url: Image1,
                    title: "Women's",
                    description:
                        "Salon & Spa Services",
                    buttonText: "Learn More",
                },
                {
                    url: Image2,
                    title: "Women's",
                    description: "Salon & Spa Services",
                    buttonText: "Learn More",
                },
                {
                    url: Image3,
                    title: "Women's",
                    description: "Salon & Spa Services",
                    buttonText: "Learn More",
                },
            ],
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        setCurrentIndex(index) {
            this.currentIndex = index;
        },
    },
    mounted() {
        this.interval = setInterval(this.nextSlide, 5000); // Change slide every 5 seconds
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>
