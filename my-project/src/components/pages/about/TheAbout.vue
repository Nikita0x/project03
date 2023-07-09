<script setup>
import AboutIntro from '../../../components/pages/about/AboutIntro.vue';
import TitleWithLine from '../../TitleWithLine.vue';
import InteriorCustomization from "./InteriorCustomization.vue"
import WhyChooseUs from "../../../components/WhyChooseUs.vue"
</script>



<template>
  <AboutIntro :title="`About`" :description="`Welcome to our world of interior design excellence. We believe that every space has a story to tell, and our mission is to transform your vision into a captivating reality.`"/>
  <TitleWithLine :title="`achievement`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[70px]`" class="px-[20px]" /> 
  <InteriorCustomization
  :title="`Interior customization with Danaanz, best quality with professional workers`"
  :projectsCompleted="`350+`"
  :professionalTeams="`23+`"
  :yearsExperience="`15+`"
  />
  <TitleWithLine :title="`service`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[70px]`" class="px-[20px] mt-[100px]" /> 
  <WhyChooseUs/>
</template>
