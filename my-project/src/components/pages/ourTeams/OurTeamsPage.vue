<script setup>
import IntroSection from "../../../components/IntroSection.vue";
import TitleWithLine from '../../TitleWithLine.vue';
import WhyChooseUs from "../../../components/WhyChooseUs.vue"
import OurTeamsGrid from "./OurTeamsGrid.vue"

</script>



<template>
  <IntroSection
    :title="`Services`"
    :description="`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`"
    :imageSrc="'https://i.ibb.co/WnWVwf2/services.png'"
  />
  <OurTeamsGrid/>
  <TitleWithLine :title="`service`" :width="`w-[30vw] 400px:w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[120px] sm:left-[100px] md:left-[110px] lg:left-[120px] xl:left-[140px]`" class="px-[20px] mt-[100px]" />
  <WhyChooseUs/>
</template>
