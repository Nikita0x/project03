<template>
  <!-- burger menu -->
  <div class="z-30 flex items-center justify-center md:hidden">
    <button
      aria-label="Open menu"
      @click="
        show = !show;
      "
      id="button"
      class="w-[50px] h-[50px]"
    >
      <!-- burger icon -->
      <svg
        v-if="!show"
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
        v-if="show"
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
    <transition>
      <UseFocusTrap v-if="show" :options="{ immediate:true }">
          <div @click="show = !show" class="fixed inset-0 bg-black bg-opacity-25 modal backdrop-blur-sm">
              <!-- menu -->
          <div class="fixed right-0 h-full w-[250px] 400px:w-[400px] bg-white"
          @click.stop="console.log('menu show')">
          <!-- close menu burger -->
              <div class="flex flex-row-reverse pr-6 h-[50px]">
                  <button @click.stop="show = !show"
                  aria-label="Close menu" tabindex="6" class="focus:outline-dashed outline-4 outline-primary flex h-[60px] w-[60px]">
                  <svg
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
              <ul class="flex flex-col items-center justify-center mt-5 space-y-10 text-2xl ">
                <li>
                  <router-link
                    tabindex="1"
                    id="home"
                    v-on:click="show = false"
                    @click.prevent="goToTop()"
                    class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
                    to="/"
                    >Home</router-link
                  >
                </li>
                <li>
                  <router-link
                  tabindex="2"
                    v-on:click="show = false"
                    @click.prevent="goToTop()"
                    class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
                    to="/about"
                    >About</router-link
                  >
                </li>
                <li>
                  <router-link
                  tabindex="3"
                    v-on:click="show = false"
                    @click.prevent="goToTop()"
                    class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
                    to="/services"
                    >Services</router-link
                  >
                </li>
                <li>
                  <router-link
                  tabindex="4"
                    v-on:click="show = false"
                    @click.prevent="goToTop()"
                    class="p-5 transition border-b-2 border-transparent hover:text-primary_hover hover:border-primary_hover focus:outline-dashed outline-4 outline-primary"
                    to="/ourteams"
                    >Our teams</router-link
                  >
                </li>
                <li>
                  <router-link
                  tabindex="5"
                    v-on:click="show = false"
                    @click.prevent="goToTop()"
                    class="flex p-5 text-center text-white transition border-b-2 border-transparent hover:bg-primary_hover active:bg-primary_active bg-primary focus:outline-dashed outline-4 outline-primary"
                    to="/contactus"
                    >Contact Us</router-link
                  >
                </li>
              </ul>
          </div>
  
          </div>
      </UseFocusTrap>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'
const show = ref(false)

const goToTop = () => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;

}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>