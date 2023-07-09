<script setup>
defineProps({
    title: String,
    required: true,
    description: String,
    require: true,
})
</script>

<template>
  <div class="flex max-w-[388px] justify-between gap-5">
    <div
      class="flex flex-col justify-center items-center min-h-[295px] space-y-[20px] shadow-md py-5 white border"
    >
      <!-- circle -->
      <div class="rounded-full w-[63px] h-[63px] bg-[#D9D9D9]"></div>
      <p class="capitalize text-lg font-semibold leading-[140%]">
        {{ title }}
      </p>
      <p
        class="text-sm font-normal leading-[160%] text-grayscale10 px-[27px]"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
