<script setup>
// import TitleWithLine from "../../TitleWithLine";
</script>

<template>
  <!-- left side -->
  <div class="flex container max-w-[1200px] mx-auto">
    <div>
      <TitleWithLine class="mt-[30px]" width="w-[450px]" title="material" />
      <h2
        class="max-w-[348px] mb-[10px] text-4xl font-semibold leading-[170%] text-[#333]"
      >
        Choice of materials for quality furniture.
      </h2>
      <p
        class="max-w-[497px] mb-[23px] text-lg font-normal leading-[160%] text-[#9C9C9C]"
      >
        You can custom the material as desired. And our furniture uses the best
        materials and selected quality materials.
      </p>
      <button
        class="w-[159px] h-[49px] hover:bg-slate-200 active:bg-slate-300 bg-white border border-[#3C3C3C] text-sm font-medium leading-[150%] text-[#333]"
      >
        See Materials
      </button>
    </div>
    <!-- right side -->
    <div
      class=" grid grid-cols-10 grid-rows-6 max-w-[620px] min-h-[490px] gap-[40px] container mx-auto"
    >
      <div
        class="col-start-1 col-end-7 row-start-2 row-span-6 bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/QNVD55G/image-2.png')]"
      ></div>
      <div
        class="col-start-7 col-end-12 row-start-1 row-span-3 bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/8bbXfyN/unsplash-Q3st-HYxw-JWM.png')]"
      ></div>
      <div
        class="col-start-7 col-end-11 row-start-4 row-end-7 bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/9p6bT04/unsplash-WIt-JTJs-W97w.png')]"
      ></div>
    </div>
  </div>
</template>