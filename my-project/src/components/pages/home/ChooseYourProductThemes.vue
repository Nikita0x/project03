<script>
import ProductThemesItem from './ProductThemesItem.vue';

export default {
  name: 'ChooseYourProductThemes',
  components: {
    ProductThemesItem,
  },
};
</script>

<template>
  <section class="container mx-auto px-[20px] max-w-[1200px]">
    <div class="flex flex-col lg:flex-row justify-between mb-[73px]">
      <div class="flex items-center flex-col mb-[40px]">
        <h2
          class="mb-[24px] lg:max-w-[400px] text-lg 400px:text-2xl md:text-4xl font-semibold leading-[170%]"
        >
          Choose your product themes.
        </h2>
      </div>
      <div class="flex items-center justify-center">
        <p
          class="max-w-[473px] h-[87px] text-sm sm:text-base lg:text-[1.125rem] font-normal leading-[160%] text-[#9C9C9C]"
        >
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>
    </div>
    <ProductThemesItem
      class="mb-[43px]"
      :number="`01`"
      :theme="`Vintage`"
      :description="`Embrace the charm of the past with our Vintage collection. Each piece exudes timeless elegance and nostalgic beauty, adding character to your space.`"
    />
    <ProductThemesItem
      class="mb-[43px]"
      :number="`02`"
      :theme="`Minimalist`"
      :description="`Experience the beauty of simplicity with our Minimalist theme. Clean lines, uncluttered spaces, and a focus on essential elements create a calming and contemporary atmosphere.`"
    />
    <ProductThemesItem
      class="mb-[43px]"
      :number="`03`"
      :theme="`Modern`"
      :description="`Embrace the sleek and cutting-edge designs of our Modern theme. Bold shapes, innovative materials, and a touch of avant-garde combine to create a captivating ambiance.`"
    />
    <ProductThemesItem
      class="mb-[43px]"
      :number="`04`"
      :theme="`Transitional`"
      :description="`Discover the perfect balance between classic and contemporary with our Transitional theme. Timeless aesthetics meet modern functionality, resulting in a harmonious blend that suits any style.`"
    />
  </section>
</template>
