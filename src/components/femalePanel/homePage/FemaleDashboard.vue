<template>

    <div class="flex flex-col min-h-screen">
        <FemaleHeaderVue />
      <div class="flex-grow">
        <SliderVue />
        <AboutVue />
        <ServicesVue />
        <ContactVue />
        
      </div>
      <FemaleFooterVue />
    </div>
</template>

<script>
import AboutVue from '../about/About.vue'
import ContactVue from '../contact/Contact.vue'
import FemaleFooterVue from '../footer/FemaleFooter.vue'
import FemaleHeaderVue from '../header/FemaleHeader.vue'
import ServicesVue from '../ourServices/Services.vue'
import SliderVue from '../slider/Slider.vue'
export default{
    name: "FemaleDashboard",
    components:{
        FemaleHeaderVue,
        FemaleFooterVue,
        SliderVue,
        ServicesVue,
        AboutVue,
        ContactVue
    }
}
</script>

<style>

</style>