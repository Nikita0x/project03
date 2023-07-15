<template>
  <header
    class="md:pt-10 container sticky top-0 md:static bg-white z-30 max-w-[1200px] mx-auto"
  >
    <nav class="flex items-center justify-between md:justify-between">
      <router-link to="/">
        <TheLogo/>
      </router-link>
      <ul
        class="hidden md:flex text-base text-grayscale items-center space-x-[20px] md:space-x-[40px] lg:space-x-[74px]"
      >
        <router-link
          class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"
          to="/"
          >Home</router-link
        >
        <router-link
          class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"
          to="/about"
          >About</router-link
        >
        <router-link
          class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"
          to="/services"
          >Services</router-link
        >
        <router-link
          class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"
          to="/ourteams"
          >Our teams</router-link
        >
          <router-link
            class="flex justify-center items-center w-[142px] h-[49px] border border-[#3C3C3C] hover:bg-primary_hover active:bg-primary_active bg-primary text-sm font-medium text-white transition"
            to="/contactus"
          >
            Contact Us
          </router-link>
      </ul>
      <BurgerMenu class="md:hidden" />
    </nav>
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue';
import BurgerMenu from './BurgerMenu.vue';

</script>