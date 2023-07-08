<script setup>
import ProductThemesItem from "./ProductThemesItem.vue";
import TitleWithLine from "../../TitleWithLine.vue";
</script>

<template>
  <div class="relative md:grid grid-cols-5 md:grid-rows-4 lg:grid-rows-5 gap-0 max-w-[1200px] border-yellow-400 border container mx-auto mb-[170px]">
    <section class=" col-start-1 col-end-5 row-start-1 row-end-4 px-[20px] border  z-10 max-w-[890px] bg-white">
      <TitleWithLine
        title="service"
        :left="'left-[80px]'"
        :top="`top-[10px]`"
        :width="'w-[45vw]'"
      />
      <div class="flex flex-col justify-between mb-[110px] 400px:mb-[70px] sm:mb-[40px]">
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
    <!--image  -->
    <div class="col-start-2 col-span-4 row-start-3 row-end-6">
      <img 
        src="../../../assets/home/AttractiveFurniture.svg"
        alt="image"
      />
    </div>
  </div>
  <!-- attractiveFurniture ends -->
</template>