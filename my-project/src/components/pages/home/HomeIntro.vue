<script setup>
import TitleWithLine from "../../TitleWithLine.vue";
import HomeIntroBlueSidebar from "./HomeIntroBlueSidebar.vue";
defineProps({
  title: String,
});
</script>

<template>
  <div class="px-[20px] sm:px-0 container relative flex flex-col mx-auto">
    <TitleWithLine  width="400px:w-[20vw] sm:w-[400px] top-[40px] sm:w-[420px] md:w-[300px] lg:w-[480px] xl:w-[580px]" top="sm:top-[35px] md:top-[70px]" right="right-[0px]" />
    <h1
      v-if="title"
      class="mb-[46px] z-10 md:z-0 bg-white md:bg-transparent text-3xl max-w-[200px]  md:text-7xl md:max-w-[630px] font-bold md:leading-[140%] text-[#333]"
    >
      {{ title }}
    </h1>
    <div>
      <div
        class="max-w-[1200px]"
      >
    <img src="../../../assets/home/HomeIntro.svg" alt="HomeIntroImage">
  </div>
      <!-- right sidebar -->
      <HomeIntroBlueSidebar />
    </div>
  </div>
</template>