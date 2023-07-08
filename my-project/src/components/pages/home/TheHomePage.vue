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
      :description="`Online learning with us does not interfere with your daily life
          because learning can be done anytime and anywhere.`"
      :right="`md:right-[-190px]`"
    />
    <AttractiveFurniture />
    <TitleWithLine class="px-[20px]" :title="`product`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[88px]`" />  
    <ChooseYourProductThemes class="mb-[160px] border border-red-300" />
    <TitleWithLine class="px-[20px ]" :title="`material`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[95px]`"/> 
    <ChoiceOfMaterials class="pb-[20px]" />
</template>
