<template>
    <section>
        <ContactUsForm class="mb-[100px]"/>
        <TitleWithLine :title="`location`" :width="`w-[30vw] 400px:w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[120px] sm:left-[100px] md:left-[110px] lg:left-[120px] xl:left-[140px]`" class="px-[20px]" />
        <VisitOurStores/>
    </section>
</template>

<script setup>
import TitleWithLine from '../../TitleWithLine.vue';
import ContactUsForm from "./ContactUsForm.vue"
import VisitOurStores from "./VisitOurStores.vue"
</script>
