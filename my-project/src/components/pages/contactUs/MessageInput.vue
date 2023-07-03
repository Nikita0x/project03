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
      <p class="text-lg font-medium leading-[150%] text-[#333] mb-[10px]">
        Message
      </p>
      <textarea
        :class="`min-w-[${width}] min-h-[${height}] px-[32px] py-[18px] border border-[#9C9C9C] bg-white text-wrap`"
        type="text"
        :placeholder="title"
      />
    </label>
  </div>
</template>