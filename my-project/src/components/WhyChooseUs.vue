<script>
import TitleWithLine from "./TitleWithLine.vue";
export default {
  name: "WhyChooseUs",
};
</script>

<template>
  <TitleWithLine :title="service" />
  <section>
    <div class="flex flex-col mb-[40px]">
      <h2 class="capitalize mb-[24px] text-4xl font-semibold leading-[170%]">
        why choose us
      </h2>
      <p class="max-w-[470px] text-lg font-normal leading-[160%]">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
    </div>

    <div class="flex justify-between gap-5">
      <div
        class="flex flex-col justify-center items-center  min-h-[295px] space-y-[20px] bg-yellow-300 border border-black"
      >
        <!-- circle -->
        <div class="rounded-full w-[63px] h-[63px] bg-[#D9D9D9]"></div>
        <p class="capitalize text-2xl font-semibold leading-[140%]">
          high quality
        </p>
        <p
          class="min-h-[116px] text-lg font-normal leading-[160%]"
        >
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>
      <div
        class="flex flex-col justify-center items-center  min-h-[295px] space-y-[20px] bg-yellow-300 border border-black"
      >
        <!-- circle -->
        <div class="rounded-full w-[63px] h-[63px] bg-[#D9D9D9]"></div>
        <p class="capitalize text-2xl font-semibold leading-[140%]">
          professional designer
        </p>
        <p
          class="min-h-[116px] text-lg font-normal leading-[160%]"
        >
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>
      <div
        class="flex flex-col justify-between items-center  min-h-[295px] space-y-[20px] bg-yellow-300 border border-black"
      >
        <!-- circle -->
        <div class="rounded-full w-[63px] h-[63px] bg-[#D9D9D9]"></div>
        <p class="capitalize text-2xl font-semibold leading-[140%]">
          the best services
        </p>
        <p
          class=" min-h-[116px] text-lg font-normal leading-[160%]"
        >
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>
    </div>
  </section>
</template>