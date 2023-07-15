<script setup>
// import TitleWithLine from "../../TitleWithLine";
</script>

<template>
  <!-- left side -->
  <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-0  px-[20px] container max-w-[1200px] mx-auto">
    <div class="flex flex-col items-center lg:items-start">
      <TitleWithLine class="mt-[30px]" width="w-[450px]" title="material" />
      <h2
        class="lg:max-w-[348px] mb-[10px] text-lg 400px:text-2xl md:text-4xl font-semibold leading-[170%] text-[#333]"
      >
        Choice of materials for quality furniture.
      </h2>
      <p
        class="max-w-[497px] mb-[23px] text-responsive-font-subheader font-normal leading-[160%] text-[#9C9C9C]"
      >
        You can custom the material as desired. And our furniture uses the best
        materials and selected quality materials.
      </p>
      <button
        aria-label="See materials"
        href="/services"
        class="w-[159px] h-[49px] hover:bg-primary hover:text-white active:bg-primary_active active:text-white bg-white border border-[#3C3C3C] text-sm font-medium leading-[150%] text-[#333] transition"
      >
        See Materials
      </button>
    </div>
    <!-- right side -->
    <div
      class="grid grid-cols-6 grid-rows-4 sm:grid-cols-10 sm:grid-rows-6 max-w-[620px] min-h-[490px] gap-[40px] container mx-auto"
    >
      <div
        class="col-span-3 row-span-2 sm:col-start-1 sm:col-end-7 sm:row-start-2 sm:row-span-6 bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/QNVD55G/image-2.png')]"
      ></div>
      <div
        class="col-span-3 row-span-2 sm:col-start-7 sm:col-end-12 sm:row-start-1 sm:row-span-3 bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/8bbXfyN/unsplash-Q3st-HYxw-JWM.png')]"
      ></div>
      <div
        class="col-span-full row-span-2 sm:col-start-7 sm:col-end-11 sm:row-start-4 sm:row-end-7 bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/9p6bT04/unsplash-WIt-JTJs-W97w.png')]"
      ></div>
    </div>
  </div>
</template>