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
  <section class="mb-[100px] pt-[100px] container max-w-[1200px] mx-auto">
    <div class="flex flex-col items-center">
      <h2 class="text-[56px] max-w-[600px] font-bold leading-[140%] mb-[36px]">
        {{ title }}
      </h2>
      <p
        class="text-center max-w-[600px] text-sm font-normal leading-[160%] mb-[57px]"
      >
        {{ description }}
      </p>
      <div class="max-w-[1200px]">
        <img src="../../../assets/about/about_intro.svg" alt="image" />
      </div>
    </div>
  </section>
</template>