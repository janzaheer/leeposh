<template>
        <div class="flex flex-col min-h-screen">
        <Header />
      <div class="flex-grow">
        <Slider />
        <Service />
        <About />
        <!-- <ServicesVue /> -->
        <Contact />
        
      </div>
      <Footer />
    </div>
</template>

<script>
import Header from '../header/Header.vue'
import Slider from '../slider/Slider.vue'
import Contact from '../contact/Contact.vue'
import Footer from '../footer/Footer.vue'
import About from '../about/About.vue'
import Service from '../ourServices/Services.vue'
export default{
    name: "MaleDashboard",
    components:{
        Header,
        Slider,
        Contact,
        About,
        Footer,
        Service
    }
}
</script>

<style>

</style>