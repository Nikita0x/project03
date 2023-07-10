<template>
    <section>
        <ContactUsForm class="mb-[100px]"/>
        <TitleWithLine :title="`location`" :width="`w-[45vw] max-w-400px`" :top="`top-[11px]`" :left="`left-[70px]`" class="px-[20px]" /> 
        <VisitOurStores/>
    </section>
</template>

<script setup>
import TitleWithLine from '../../TitleWithLine.vue';
import ContactUsForm from "./ContactUsForm.vue"
import VisitOurStores from "./VisitOurStores.vue"
</script>
