<template>
    <div class="bg-white mt-16" id="services">
        <div class="px-4 py-6 sm:px-6 sm:py-24 lg:px-10">
            <div class="">
                <h2 class="text-4xl text-center text-pink-500">
                    Our Services
                </h2>
                <p class="leading-relaxed my-6 text-center">A full range of Beauty and Spa services</p>
            </div>
            <div class="border-b-2"></div>
            <div
                class="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-x-1">
                <RouterLink to="/FaceCare">
                    <CardListVue title="Face Care" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fFaceCare1.jpeg" />
                </RouterLink>
                <RouterLink to="/HairStyle">
                    <CardListVue title="Hair Styling" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fHairStyle.jpeg" />
                </RouterLink>
                <RouterLink to="/HairCut">
                    <CardListVue title="Hair Cut" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fHairCut.jpeg" />
                </RouterLink>
                <RouterLink to="/Colouring">
                    <CardListVue title="Colouring & Texturing" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/Fcolouring.jpeg" />
                </RouterLink>
                <RouterLink to="/WaxList">
                    <CardListVue title="Waxing" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fwax1.jpeg" />
                </RouterLink>
                <RouterLink to="/HairTreatment">
                    <CardListVue title="Hair Treatment" img="https://plus.unsplash.com/premium_photo-1674841253335-6c892a8b1dc1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/ThreadingList">
                    <CardListVue title="Threading" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fThread.jpeg" />
                </RouterLink>
                <RouterLink to="/MakeupList">
                    <CardListVue title="Makeup" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fMakeup.jpeg" />
                </RouterLink>
                <RouterLink to="/BridalList">
                    <CardListVue title="Bridal Package" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/Fbridal.jpeg" />
                </RouterLink>
                <RouterLink to="/Massage">
                    <CardListVue title="Massage" img="https://plus.unsplash.com/premium_photo-1661274213751-0ccaaffdecac?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/PedicureList">
                    <CardListVue title="Pedicure" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fPedi.jpeg" />
                </RouterLink>
                <RouterLink to="/ManicureList">
                    <CardListVue title="Manicure" img="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/leeposh-pic/fMeni1.jpeg" />
                </RouterLink>
            </div>
        </div>
        <!-- -->
        <!-- Modal -->
        <div id="static-modal" tabIndex="-1" aria-hidden="!isModalOpen" :class="isModalOpen ? 'flex' : 'hidden'"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900 bg-opacity-75">
            <div class="relative w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-white">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-pink-500 dark:text-pink-500">
                            {{ modalContent?.name || "Modal Title" }}
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            @click="closeModal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div class="p-4 md:p-5 space-y-4">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-dark text-center">Book Appointment
                        </h3>
                        <!-- <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
                </div>
            </div> -->
                        <section class="text-gray-600 body-font">
                            <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                                <img class="lg:w-full md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                                    alt="hero" :src=modalContent?.img>
                                <div class="text-center lg:w-2/3 w-full">
                                    <p class="mb-8 leading-relaxed">{{ modalContent?.title }}</p>
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{
                    modalContent?.title2 }}</h1>
                                    <p class="mb-8 leading-relaxed">{{ modalContent?.description }}</p>
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Price: {{
                                        modalContent?.price }}</h1>
                                    <div class="flex justify-center">
                                        <a :href="`https://wa.me/${'03462789100'}?text=Hello I Am Badini`"
                                            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book
                                            Service at Whatsapp</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
// import { servicesData } from '../../../db/female-db'
import CardListVue from './CardList.vue';
export default {
    name: 'Services',

    data() {
        return {
            // servicesData: servicesData,
            // isModalOpen: false,
            // modalContent: null,
        };
    },
    components:{
        CardListVue
    },
    mounted() {

    },

    methods: {
        // openModal(data) {
        //     this.modalContent = data;
        //     this.isModalOpen = true;
        // },
        // closeModal() {
        //     this.isModalOpen = false;
        //     this.modalContent = null;
        // },
    },
};
</script>