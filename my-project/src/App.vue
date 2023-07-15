<script setup>
import { ref, onMounted } from "vue";

const showComponent = ref(false);

onMounted(() => {
  setTimeout(() => {
    showComponent.value = true;
  }, 2500); // Hide for 3 seconds (3000 milliseconds)
});
// import WhyChooseUs from "./components/WhyChooseUs.vue";
// import TitleWithLine from "./components/TitleWithLine.vue";
// import ChooseYourProductThemes from "./components/pages/home/ChooseYourProductThemes.vue";
// import IntroSection from "./components/IntroSection.vue";
// import AchievementItem from "./components/pages/services/AchievementItem.vue";
// import PersonCard from "./components/pages/ourTeams/PersonCard.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
// import TheServices from "./components/pages/services/TheServices.vue";
// import InteriorCustomization from "./components/pages/about/InteriorCustomization.vue";
// import VisitOurStores from "./components/pages/contactUs/VisitOurStores.vue";
// import ContactUsForm from "./components/pages/contactUs/ContactUsForm.vue";
// import PortfolioDetails from "./components/pages/portfolio/PortfolioDetails.vue";
// import OurTeamsGrid from "./components/pages/ourTeams/OurTeamsGrid.vue";
// import ChoiceOfMaterials from "./components/pages/home/ChoiceOfMaterials.vue";
// import AttractiveFurniture from "./components/pages/home/AttractiveFurniture.vue";
// import BestFurnitureAgency from "./components/pages/home/BestFurnitureAgency.vue";
// import HomeIntro from "./components/pages/home/HomeIntro.vue";
// import PortfolioMain from "./components/pages/portfolio/PortfolioMain.vue";
// import InputField from "./components/pages/contactUs/InputField.vue";
// import TheHomePage from "./components/pages/home/TheHomePage.vue";




// export default {
//   name: "App",
//   components: {
//     WhyChooseUs,
//     ChooseYourProductThemes,
//     IntroSection,
//     AchievementItem,
//     PersonCard,
//     TheHeader,
//     TheFooter,
//     TheServices,
//     ContactUsForm,
//     InputField,
//     TitleWithLine,
//     InteriorCustomization,
//     VisitOurStores,
//     PortfolioDetails,
//     OurTeamsGrid,
//     ChoiceOfMaterials,
//     AttractiveFurniture,
//     BestFurnitureAgency,
//     HomeIntro,
//     PortfolioMain,
//     TheHomePage
//   },
// };

</script>

<template>
  <body font-roboto id="app" class="container mx-auto ">
    <transition :duration="2000" appear name="header">
      <TheHeader class="px-[20px]" />
    </transition>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
    <transition v-if="showComponent" appear name="footer" mode="out-in">
      <div :key="Date.now()">
        <TheFooter />
      </div>
    </transition>
  </body>
</template>

<style>
/* route transitions */
.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter-active {
  transition: all 0.8s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-leave-active {
  transition: all 0.8s;
}
/* header */
.header-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.header-enter-active {
  transition: all 1s ease-out;
}
.header-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.header-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.header-leave-active {
  transition: all 1s ease-in;
}


/* footer */
.footer-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.footer-enter-active {
  transition: all 1s ease-out;
}
.footer-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.footer-leave-active {
  transition: all 1s ease-in;
  transition-duration: 2s;

}



</style>


<!-- https://www.figma.com/file/OfeVmBzq7TJrXvHFxmqpvb/Dananz---Interior-Design-Website-UI-KIT-(Community)-(Copy)?node-id=1%3A2&mode=dev -->