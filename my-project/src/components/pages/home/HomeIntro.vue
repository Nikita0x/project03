<script setup>
import TitleWithLine from "../../TitleWithLine.vue";
defineProps({
  title: String,
});
</script>

<template>
  <div class="container flex flex-col mx-auto">
    <TitleWithLine width="w-[683px]" top="top-[75px]" right="right-[0px]" />
    <h1
      v-if="title"
      class="mb-[46px] text-7xl max-w-[630px] font-bold leading-[140%] text-[#333]"
    >
      {{ title }}

      <img src="" alt="">
    </h1>
    <div class="relative">
      <div
        class="max-w-[1200px] min-h-[513px]"
      >
    <img src="../../../assets/home/HomeIntro.svg" alt="HomeIntroImage"></div>
      <!-- right sidebar -->
      <div
        class="absolute bottom-[197px] left-[806px] max-w-[252px] py-[40px] px-[50px] flex flex-col items-center bg-[#2C3878] text-white"
      >
        <!-- projects completed -->
        <h2 class="text-[52px] leading-[160%]">350+</h2>
        <p class="text-base leading-[160%] mb-[57px]">Project Completed</p>
        <!-- professional teams -->
        <h2 class="text-[52px] leading-[160%]">23+</h2>
        <p class="text-base leading-[160%] mb-[57px]">Professional Teams</p>
        <!-- years experience -->
        <h2 class="text-[52px] leading-[160%]">15+</h2>
        <p class="text-base leading-[160%]">Years Experience</p>
      </div>
      <!-- copyrights -->
      <div
        class="absolute top-[-179px] right-[174px] -rotate-90 max-w-[200px] min-h-[54px]"
      >
        <p class="text-lg uppercase font-medium leading-[150%]">
          2023<br />
          all rights reserved
        </p>
      </div>
    </div>
  </div>
</template>