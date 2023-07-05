<script setup>
import ProductThemesItem from "./ProductThemesItem.vue";
import TitleWithLine from "../../TitleWithLine.vue";
</script>

<template>
  <div class="relative max-w-[1200px] md:min-h-[1000px] container mx-auto">
    <section class="px-[20px] absolute z-10 container mx-auto max-w-[890px] bg-white">
      <TitleWithLine
        title="service"
        :left="'left-[70px]'"
        :top="`top-[10px]`"
        :width="'w-[45vw]'"
      />
      <div class="flex flex-col justify-between mb-[140px] 400px:mb-[70px] sm:mb-[40px]">
        <div class="flex flex-col mb-[24px]">
          <h2 class="max-w-[760px] text-lg 400px:text-2xl md:text-4xl font-semibold leading-[170%]">
            Attractive furniture with the best quality.
          </h2>
        </div>
        <div class="flex items-center">
          <p
            class="max-w-[473px] h-[87px] text-[15px] 400px:text-[18px] font-normal leading-[160%] text-[#9C9C9C]"
          >
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
      </div>
      <ProductThemesItem
        class="mb-[35px]"
        :number="`01`"
        :theme="`Interior Design`"
      />
      <ProductThemesItem
        class="mb-[35px]"
        :number="`02`"
        :theme="`Consultant`"
      />
      <ProductThemesItem class="mb-[35px]" :number="`03`" :theme="`Construction Consultant`" />
    </section>
    <!-- hello -->
    <div class="absolute sm:max-w-[1067px] sm:min-h-[682px] bottom-0 right-0">
      <img
        class="sm:max-w-[1067px] sm:min-h-[524px]"
        src="../../../assets/home/AttractiveFurniture.svg"
        alt="image"
      />
    </div>
  </div>
  <!-- attractiveFurniture ends -->
</template>