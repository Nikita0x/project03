<script setup>
import TitleWithLine from "./TitleWithLine.vue";
import WhyChooseUsCard from "./pages/about/WhyChooseUsCard.vue";
</script>

<template>
  <section>
    <div class="flex px-[20px] items-center lg:items-start flex-col mb-[40px]">
      <h2 class="capitalize mb-[24px] text-2xl font-semibold leading-[170%]">
        why choose us
      </h2>
      <p class="max-w-[500px] text-sm font-normal leading-[160%] text-grayscale10">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
    </div>

    <div class="flex flex-col items-center justify-between gap-5 lg:items-start px- lg:flex-row">
      <WhyChooseUsCard :title="'High Quality'" :description="'Indulge in exceptional craftsmanship and superior quality. Our handpicked selection of furniture and decor ensures that every piece in your space is built to last and impress.'"/>
      <WhyChooseUsCard :title="'Professional Designer'" :description="'Unlock the expertise of our skilled designers. Collaborate with our team to curate a personalized interior that reflects your unique taste and lifestyle.'"/>
      <WhyChooseUsCard :title="'The Best Services'" :description="'Experience unparalleled customer satisfaction. From concept to completion, we provide comprehensive support, ensuring a seamless and stress-free journey towards your dream home.'"/>

    </div>

  </section>
</template>