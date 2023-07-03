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
    <div class="flex justify-between">
      <!-- image -->
      <div class="max-w-[746px]">
        <img :src="imageSrc" alt="Image" />
      </div>
      <!-- title + description -->
      <div class="flex flex-col">
        <h3 class="text-2xl font-semibold leading-[140%] mb-[20px]">
          {{ title }}
        </h3>
        <p class="max-w-[334px] text-lg font-normal leading-[160%]">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>