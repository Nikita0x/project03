<script>
export default {
  name: "IntroSection",
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
  <section class="mb-[100px] container max-w-[1200px] mx-auto">
    <div class="flex flex-col items-center">
      <h2 class="text-[56px] font-bold leading-[140%] mb-[36px]">
        {{ title }}
      </h2>
      <p
        class="text-center max-w-[518px] px-5 text-lg font-normal leading-[160%] mb-[57px]"
      >
        {{ description }}
      </p>
      <div class="max-w-[1200px]">
        <img :src="imageSrc" alt="image" />
      </div>
    </div>
  </section>
</template>