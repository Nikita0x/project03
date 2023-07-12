<script setup>
defineProps({
  title: String,
  width: String,
  height: String,
});
</script>

<template>
  <div>
    <label>
      <p class="text-sm font-medium leading-[150%] text-[#333] mb-[10px]">
        {{ title }}
      </p>
      <input
        :class="`min-w-[${width}] min-h-[${height}] px-[32px] text-sm py-[18px] border border-[#9C9C9C] bg-white`"
        type="text"
        :placeholder="title"
      />
    </label>
  </div>
</template>
