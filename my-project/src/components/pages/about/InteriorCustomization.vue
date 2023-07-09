<script setup>
defineProps({
  title: String,
  projectsCompleted: String,
  professionalTeams: String,
  yearsExperience: String,
});
</script>

<template>
  <h2 class="px-[20px] max-w-[650px] mb-[56px] text-2xl font-semibold leading-[170%]">
    {{ title }}
  </h2>

  <div class="flex flex-col justify-between space-y-6 lg:flex-row">
    <!-- image -->
    <div>
      <img src="../../../assets/about/interior_customization.svg" alt="image" />
    </div>
    <!-- right sidebar -->
    <div
      class="min-w-[252px] px-[20px] min-h-[525px] flex flex-col justify-center items-center bg-primary text-white"
    >
      <!-- projects completed -->
      <h2 class="text-[52px] leading-[160%]">{{ projectsCompleted }}</h2>
      <p class="text-xs leading-[160%] mb-[57px]">Project Completed</p>
      <!-- professional teams -->
      <h2 class="text-[52px] leading-[160%]">{{ professionalTeams }}</h2>
      <p class="text-xs leading-[160%] mb-[57px]">Professional Teams</p>
      <!-- years experience -->
      <h2 class="text-[52px] leading-[160%]">{{ yearsExperience }}</h2>
      <p class="text-xs leading-[160%]">Years Experience</p>
    </div>
  </div>
</template>