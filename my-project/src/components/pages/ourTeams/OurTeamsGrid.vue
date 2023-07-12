<script setup>
import TitleWithLine from "../../../components/TitleWithLine.vue";
import PersonCard from "./PersonCard.vue";

defineProps({
  title: String,
});
</script>

<template>
  <section>
    <div class="flex flex-col container max-w-[1200px] mx-auto">
      <TitleWithLine :title="`designer`" :width="`w-[30vw] 400px:w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[120px] sm:left-[100px] md:left-[110px] lg:left-[120px] xl:left-[140px]`" class="px-[20px]" />
      <h2
        class="max-w-[470px] mb-[24px] text-4xl font-semibold leading-[170%] text-[#333]"
      >
        Creative Person
      </h2>
      <p class="max-w-[470px] mb-[80px] text-lg leading-[160%] text-[#9C9C9C]">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div class="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:items-start gap-[24px]">
        <PersonCard
          :imageSrc="`https://i.ibb.co/Y20CLLF/guy.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/0ybdV3Y/guy.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/tm4JcYd/girl.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/xzp8gsV/gu2.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/8NW6bPL/girl2.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/NCR6Hcq/guy3.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/1Z629HL/girl3.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
        <PersonCard
          :imageSrc="`https://i.ibb.co/XJ319Gw/guy4.png`"
          :name="`Shoo Phar Dhie`"
          :position="`CEO`"
        />
      </div>
    </div>
  </section>
</template>