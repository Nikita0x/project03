<script>
export default {
  name: "PersonCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
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
  <div
    class="relative flex flex-col justify-center items-center w-[280px] h-[400px] rounded-md bg-[#2C3878]"
  >
    <div class="absolute bottom-0 left-0">
      <img :src="imageSrc" alt="PersonPhoto" />
    </div>
    <div class="absolute bottom-[12px] w-[258px] h-[96px] rounded-md bg-white">
      <h2
        class="text-[24px] font-semibold leading-[140%] text-[#333] pt-[18px] pl-[16px]"
      >
        {{ name }}
      </h2>
      <p
        class="text-[16px] font-normal leading-[160%] text-[#9C9C9C] pl-[16px]"
      >
        {{ position }}
      </p>
    </div>
  </div>
</template>