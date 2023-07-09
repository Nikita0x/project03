<script setup>
import HomeIntro from '../home/HomeIntro.vue';
import AttractiveFurniture from '../home/AttractiveFurniture.vue';
import BestFurnitureAgency from '../home/BestFurnitureAgency.vue';
import ChoiceOfMaterials from '../home/ChoiceOfMaterials.vue';
import TitleWithLine from '../../TitleWithLine.vue';
import ChooseYourProductThemes from './ChooseYourProductThemes.vue';



</script>

<template>
  <HomeIntro class="mb-[170px] sm:mb-[160px]" :title="`Design your interior with high quality.`" />
  <TitleWithLine :title="`about`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[70px]`" class="px-[20px]" />  
  <BestFurnitureAgency
      class="mb-[160px]"
      :title="`“We're one of the best furniture agency. Prioritizing customers and making
      purchases easy are the hallmarks of our agency.”`"
      :theme="`right-[-190px]`"
      :description="`We will help you build your dream home. It has never been easier!`"
      :right="`md:right-[-190px]`"
    />
    <AttractiveFurniture />
    <TitleWithLine class="px-[20px]" :title="`product`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[88px]`" />  
    <ChooseYourProductThemes class="mb-[160px]" />
    <TitleWithLine class="px-[20px ]" :title="`material`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[95px]`"/> 
    <ChoiceOfMaterials class="pb-[20px]" />
</template>
