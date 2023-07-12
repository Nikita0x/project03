<script>
export default {
  name: "TitleWithLine",
  props: {
    title: {
      type: String,
    },
    width: String,
    right: String,
    left: String,
    top: String,
  },
};
</script>

<template>
  <div class="container max-w-[1200px] mx-auto">
    <p
      class="relative z-20 bg-white uppercase text mb-[20px] text-base font-medium leading-[150%]"
    >
      {{ title }}
      <span
        :class="`absolute ${right} ${left} ${top} h-[2px] bg-black z-10 ${width}`"
      ></span>
    </p>
  </div>
</template>