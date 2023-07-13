<script>
export default {
  name: "AchievementItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section class="container mx-auto max-w-[1200px]">
    <div class="flex flex-col items-center justify-between lg:items-start lg:flex-row">
      <!-- image -->
      <div class="max-w-[746px]">
        <img :src="imageSrc" alt="Image" />
      </div>
      <!-- title + description -->
      <div class="px-[20px] lg:px-0 flex flex-col items-center lg:items-start">
        <h3 class="text-2xl pt-5 lg:pt-0 max-w-[334px] font-semibold leading-[140%] mb-[20px]">
          {{ title }}
        </h3>
        <p class="lg:max-w-[334px] text-lg font-normal leading-[160%]">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>