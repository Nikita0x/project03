<script setup>
defineProps({
  title: String,
  width: String,
  height: String,
});
</script>

<template>
  <div>
    <label class="flex flex-col">
      <p class="text-sm font-medium leading-[150%] text-[#333] mb-[10px]">
        {{ title }}
      </p>
      <input
        :class="`max-w-[413px] min-h-[62px] px-[32px] text-sm py-[18px] border border-[#9C9C9C] bg-white`"
        type="text"
        :placeholder="title"
      />
    </label>
  </div>
</template>
