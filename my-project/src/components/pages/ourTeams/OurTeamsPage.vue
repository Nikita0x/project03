<script setup>
import OurTeamsIntro from "../../../components/pages/ourTeams/OurTeamsIntro.vue";
import TitleWithLine from '../../TitleWithLine.vue';
import WhyChooseUs from "../../../components/WhyChooseUs.vue"
import OurTeamsGrid from "./OurTeamsGrid.vue"

</script>



<template>
  <OurTeamsIntro
    :title="`Our teams`"
    :description="`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`"
  />
  <OurTeamsGrid/>
  <TitleWithLine :title="`service`" :width="`w-[30vw] 400px:w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[120px] sm:left-[100px] md:left-[110px] lg:left-[120px] xl:left-[140px]`" class="px-[20px] mt-[100px]" />
  <WhyChooseUs/>
</template>
