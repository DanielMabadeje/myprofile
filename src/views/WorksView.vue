<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import MyWorks from '@/components/MyWorks.vue'
import { useFadeIn } from '@/composables/useFadeIn'
useFadeIn()
</script>

<template>
  <section class="page-section fade-in works-section">
    <SectionHeader
      label="Portfolio"
      title="Work I've shipped."
      desc="Companies and teams I've built with — as a contract, part-time, or full-time collaborator."
    />
    <MyWorks />
  </section>
</template>

<style scoped>
.works-section { padding-top: 96px; }
</style>
