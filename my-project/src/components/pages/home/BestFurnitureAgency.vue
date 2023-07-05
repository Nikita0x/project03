<script setup>
// import TitleWithLine from "../../../components/";
defineProps({
  title: String,
  theme: String,
  description: String,
  flexDirection: String,
  right: String,
});
</script>    
    
    <template>
  <section class="container mx-auto max-w-[1200px]">
    <TitleWithLine
      class="mt-[30px]"
      left="left-[70px]"
      width="w-[450px]"
      title="about"
    />
    <h2
      v-if="title"
      class="mb-[56px] text-[#333] text-2xl md:text-4xl font-semibold leading-[170%]"
    >
      {{ title }}
    </h2>

    <div :class="`flex ${flexDirection} min-h-[525px] gap-[94px]`">
      <!-- image -->
      <div class="relative max-w-[883px]">
        <img
          src="../../../assets/home/BestFurnitureAgency.svg"
          alt="image"
        />
        <!-- card -->
        <div
          :class="`flex absolute ${right} top-[27px] justify-evenly items-center w-[276px] h-[90px] bg-white drop-shadow`"
        >
          <div class="flex justify-center items-center w-[51px] h-[56px]">
            <img src="../../../assets/home/arga.svg" alt="image" />
          </div>
          <div class="flex flex-col items-start justify-center">
            <h2 class="text-lg font-semibold leading-[140%]">Arga Danaan</h2>
            <p class="text-lg leading-[160%] text-[#9C9C9C]">CEO of Dananz</p>
          </div>
        </div>
      </div>
      <!-- right sidebar -->
      <div
        class="max-w-[200px] pt-[120px] flex flex-col justify-center items-start bg-white"
      >
        <p class="mb-[40px] text-lg leading-[160%] text-[#9C9C9C]">
          {{ description }}
        </p>
        <a
          href="#"
          class="inline-block text-sm font-medium capitalize text-grayscale"
        >
          <div
            class="flex justify-center items-center w-[142px] h-[49px] text-white bg-primary hover:bg-primary_hover active:bg-primary_active transition"
          >
            <p>learn more</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>