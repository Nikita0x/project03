<script>
export default {
  name: "ProductThemesItem",
  props: {
    number: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <a href="#" class="transition duration-300 rounded-sm hover:bg-slate-200 focus:bg-slate-200">
      <div class="flex items-center justify-between">
      <div class="flex">
        <p class="text-sm sm:text-base lg:text-[1.125rem] font-semibold leading-[140%]">{{ number }}</p>
        <p class="pl-[20px] 400px:pl-[80px] text-sm sm:text-base lg:text-[1.125rem] font-semibold leading-[140%]">
          {{ theme }}
        </p>
      </div>
      <div class="w-[32px] h-[32px]">
        <img src="../../../assets/home//arrow-right.svg" alt="arrow-right">
      </div>
    </div>
    </a>

    <p
      v-if="description"
      class="ml-[10vw] pt-[24px] max-w-[650px] min-h-[58px] text-sm sm:text-base lg:text-[1.125rem] font-normal leading-[160%]"
    >
      {{ description }}
    </p>
  </div>
</template>