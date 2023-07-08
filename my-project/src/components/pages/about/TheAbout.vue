<script setup>
import IntroSection from '../../../components/IntroSection.vue';
import TitleWithLine from '../../TitleWithLine.vue';
import InteriorCustomization from "./InteriorCustomization.vue"
import WhyChooseUs from "../../../components/WhyChooseUs.vue"
</script>



<template>
  <IntroSection :title="`About`" :description="`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`"/>
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
