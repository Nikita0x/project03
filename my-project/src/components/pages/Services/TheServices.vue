<script setup>
import IntroSection from "../../IntroSection.vue";
import TitleWithLine from "../../TitleWithLine.vue";
import AchievementItem from "./AchievementItem.vue";
import ChooseYourProductThemes from "../home/ChooseYourProductThemes.vue";
</script>

<template>
  <IntroSection
    :title="`Services`"
    :description="`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`"
    :imageSrc="'https://i.ibb.co/tBGVv1h/ourteams.png'"
  />
  <TitleWithLine :title="`achievement`" :width="`w-[30vw] 400px:w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[120px] sm:left-[140px] md:left-[160px] lg:left-[170px] xl:left-[180px]`" class="px-[20px]" />
  <AchievementItem
    class="mb-[40px]"
    :imageSrc="`https://i.ibb.co/gZLsfyk/picture2.png`"
    :title="`Interior design`"
    :description="`Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.`"
  />
  <AchievementItem
    class="mb-[40px]"
    :imageSrc="`https://i.ibb.co/CHKvRZ1/consultant.png`"
    :title="`Consultant`"
    :description="`Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.`"
  />
  <AchievementItem
    class="mb-[100px]"
    :imageSrc="`https://i.ibb.co/rcYb4t2/guys.png`"
    :title="`Construction consultant`"
    :description="`Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.`"
  />
  <TitleWithLine :title="`product`" :width="`w-[30vw] 400px:w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[120px] sm:left-[100px] md:left-[110px] lg:left-[120px] xl:left-[140px]`" class="px-[20px]" />
  <ChooseYourProductThemes />
</template>