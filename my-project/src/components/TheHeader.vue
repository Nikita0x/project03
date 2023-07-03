<script setup>
import TheLogo from './TheLogo.vue';
</script>

<template>
  <header
    class="mt-10 container max-w-[1680px] mx-auto px-[120px] mb-[100px] border border-black"
  >
    <nav class="flex items-center justify-between">
      <TheLogo />
      <ul class="flex text-grayscale items-center space-x-[74px]">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <li class="hover:text-red-500"><a href="#">Services</a></li>
        <li class="hover:text-red-500"><a href="#">Our Teams</a></li>
        <a href="#">
          <li
            class="flex justify-center items-center w-[142px] h-[49px] border border-[#3C3C3C] hover:text-red-500 bg-primary text-sm font-medium text-white"
          >
            Contact Us
          </li>
        </a>
      </ul>
    </nav>
  </header>
</template>
