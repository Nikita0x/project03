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
        :class="`w-full min-h-[62px] px-[32px] py-[18px] border border-[#9C9C9C] text-sm bg-white`"
        type="text"
        :placeholder="title"
        value="+380 (67) "
      />
    </label>
  </div>
</template>