<template>
  <header
    class="mt-10 container max-w-[1200px] mx-auto mb-[100px] border border-black"
  >
    <nav class="flex items-center justify-between md:justify-between">
      <TheLogo />
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
        <li
          class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"
        >
          <a href="#">Services</a>
        </li>
        <li
          class="transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover"
        >
          <a href="#">Our Teams</a>
        </li>
        <a href="#">
          <li
            class="flex justify-center items-center w-[142px] h-[49px] border border-[#3C3C3C] hover:bg-primary_hover active:bg-primary_active bg-primary text-sm font-medium text-white transition"
          >
            Contact Us
          </li>
        </a>
      </ul>


      <!-- burger menu -->
      <div class="z-30 flex items-center justify-center md:hidden">
        <button
          @click="burgerOpen = !burgerOpen; activate()"
          id="button"
          class="border w-[50px] h-[50px] border-pink-700"
        >
          <!-- burger icon -->
          <svg
            v-if="!burgerOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!-- close icon -->
          <svg
            v-if="burgerOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- overlay-->
        <div
        @click.stop.prevent="burgerOpen = !burgerOpen"
        @click.prevent="deactivate()"
          v-if="burgerOpen"
          class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        >
        <!-- transition -->
          <div
          id="burgerMenu"
          @click.stop.prevent="console.log('menu')" 
          class="fixed right-0 h-full w-[250px] 400px:w-[400px] bg-white">
            <!-- button -->
            <div class="flex justify-end pr-5 mt-10 border">
              <button
                v-if="burgerOpen"
                tabindex="1"
                @click="burgerOpen = !burgerOpen"
                @click.prevent="deactivate()"
                id="button"
                class="border w-[50px] h-[50px] border-emerald-700 z-10 focus:outline-dashed outline-4 outline-primary"
              >
                <!-- burger icon -->
                <svg
                  v-if="!burgerOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <!-- close icon -->
                <svg
                  v-if="burgerOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          <!-- content -->
          <div class="flex flex-col items-center justify-center mt-5 space-y-3 text-2xl ">

          <router-link
          id="home"
          v-on:click="burgerOpen = false"
          class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
          to="/"
          >Home</router-link
        >
        <router-link
          v-on:click="burgerOpen = false"
          class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
          to="/about"
          >About</router-link
        >
        <router-link
          v-on:click="burgerOpen = false"
          class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
          to="/about"
          >Services</router-link
        >
        <router-link
          v-on:click="burgerOpen = false"
          class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
          to="/about"
          >Our teams</router-link
        >
        <router-link
          v-on:click="burgerOpen = false"
          class="flex p-5 text-center text-white transition border-b-2 border-transparent hover:bg-primary_hover active:bg-primary_active bg-primary focus:outline-dashed outline-4 outline-primary"
          to="/about"
          >Contact Us</router-link
        >
      </div>



          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue';
import { ref } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const burgerOpen = ref(false);

// focus trap
const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target, { immediate: true })

</script>

<style>



</style>