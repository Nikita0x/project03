<script setup>
import HomeIntro from '../home/HomeIntro.vue';
import AttractiveFurniture from '../home/AttractiveFurniture.vue';
import BestFurnitureAgency from '../home/BestFurnitureAgency.vue';
import ChoiceOfMaterials from '../home/ChoiceOfMaterials.vue';
import TitleWithLine from '../../TitleWithLine.vue';
import ChooseYourProductThemes from './ChooseYourProductThemes.vue';



</script>

<template>
  <HomeIntro class="mb-[50px] sm:mb-[160px]" :title="`Design your interior with high quality.`" />
  <TitleWithLine :title="`about`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[70px]`" />  
  <BestFurnitureAgency
      class="mb-[160px]"
      :title="`“We're one of the best furniture agency. Prioritizing customers and making
      purchases easy are the hallmarks of our agency.”`"
      :theme="`right-[-190px]`"
      :description="`Online learning with us does not interfere with your daily life
          because learning can be done anytime and anywhere.`"
      :right="`right-[-190px]`"
    />
    <AttractiveFurniture />
    <TitleWithLine :title="`product`" :width="`w-[529px] max-w-400px`" :top="`top-[11px]`" :left="`left-[10%]`" />  
    <ChooseYourProductThemes class="mb-[160px]" />
    <TitleWithLine :title="`material`" :width="`w-[529px] max-w-400px`" :top="`top-[11px]`" :left="`left-[10%]`" /> 
    <ChoiceOfMaterials class="pb-[20px]" />
</template>
