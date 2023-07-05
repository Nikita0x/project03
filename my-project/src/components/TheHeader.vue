<script setup>
import TheLogo from './TheLogo.vue';
</script>

<template>
  <header
    class="mt-10 container max-w-[1200px] mx-auto mb-[100px] border border-black"
  >
    <nav class="flex items-center justify-between">
      <TheLogo />
      <ul class="flex text-grayscale items-center space-x-[74px]">
        <router-link class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover" to="/">Home</router-link>
        <router-link class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover" to="/about">About</router-link>
        <li class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover "><a href="#">Services</a></li>
        <li class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"><a href="#">Our Teams</a></li>
        <a href="#">
          <li
            class="flex justify-center items-center w-[142px] h-[49px] border border-[#3C3C3C] hover:bg-primary_hover active:bg-primary_active bg-primary text-sm font-medium text-white transition "
          >
            Contact Us
          </li>
        </a>
      </ul>
    </nav>
  </header>
</template>
