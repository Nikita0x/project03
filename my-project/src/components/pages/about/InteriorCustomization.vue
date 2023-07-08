<script setup>
defineProps({
  title: String,
  projectsCompleted: String,
  professionalTeams: String,
  yearsExperience: String,
});
</script>

<template>
  <h2 class="max-w-[618px] mb-[56px] text-4xl font-semibold leading-[170%]">
    {{ title }}
  </h2>

  <div class="flex justify-between">
    <!-- image -->
    <div class="max-w-[883px]">
      <img src="../../../assets/about/interior_customization.svg" alt="image" />
    </div>
    <!-- right sidebar -->
    <div
      class="max-w-[252px] py-[40px] px-[50px] flex flex-col items-center bg-[#2C3878] text-white"
    >
      <!-- projects completed -->
      <h2 class="text-[52px] leading-[160%]">{{ projectsCompleted }}</h2>
      <p class="text-base leading-[160%] mb-[57px]">Project Completed</p>
      <!-- professional teams -->
      <h2 class="text-[52px] leading-[160%]">{{ professionalTeams }}</h2>
      <p class="text-base leading-[160%] mb-[57px]">Professional Teams</p>
      <!-- years experience -->
      <h2 class="text-[52px] leading-[160%]">{{ yearsExperience }}</h2>
      <p class="text-base leading-[160%]">Years Experience</p>
    </div>
  </div>
</template>