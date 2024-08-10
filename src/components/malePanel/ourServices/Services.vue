<template>
    <div class="bg-white mt-16" id="services">
        <div class="px-4 py-6 sm:px-6 sm:py-24 lg:px-10">
            <div class="">
                <h2 class="text-4xl text-center text-slate-500">Our Services</h2>
                <p class="leading-relaxed my-6 text-center">
                    A full range of Beauty and Spa services
                </p>
            </div>
            <div class="border-b-2"></div>
            <div class="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-x-1">
                <RouterLink to="/HairCareList">
                    <Card title="Hair Care" img="https://plus.unsplash.com/premium_photo-1665203406912-4fbd99560a90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/FaceCareList">
                    <Card title="Face Care" img="https://plus.unsplash.com/premium_photo-1665203406912-4fbd99560a90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/ColouringList">
                    <Card title="Colouring & Texturing" img="https://plus.unsplash.com/premium_photo-1665203406912-4fbd99560a90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/WaxingList">
                    <Card title="Waxing" img="https://plus.unsplash.com/premium_photo-1665203406912-4fbd99560a90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/MassageList">
                    <Card title="Massage" img="https://plus.unsplash.com/premium_photo-1665203406912-4fbd99560a90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
                <RouterLink to="/GroomingList">
                    <Card title="Grooming" img="https://plus.unsplash.com/premium_photo-1665203406912-4fbd99560a90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Card from '../ourServices/Card.vue'
// import { servicesData } from "../../../db/male-db";
export default {
    name: "LeeposhWebServices",

    data() {
        return {
            // servicesData: servicesData,
           

        };
    },
    components:{
        Card,
    },
    mounted() { },

    methods: {

    },
};
</script>
