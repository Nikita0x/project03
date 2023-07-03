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
    <div class="flex items-center justify-between">
      <div class="flex">
        <p class="text-[32px] font-semibold leading-[140%]">{{ number }}</p>
        <p class="pl-[80px] text-[32px] font-semibold leading-[140%]">
          {{ theme }}
        </p>
      </div>
      <button class="text-[40px]">-></button>
    </div>
    <p
      v-if="description"
      class="ml-[120px] max-w-[469px] min-h-[58px] text-lg font-normal leading-[160%]"
    >
      {{ description }}
    </p>
  </div>
</template>