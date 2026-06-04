<script setup>
defineProps({
  label: String,
  title: String,
  desc: String,
})
</script>

<template>
  <div class="section-header">
    <div v-if="label" class="sec-label">{{ label }}</div>
    <h2 v-if="title" class="sec-title" v-html="title" />
    <p v-if="desc" class="sec-desc" v-html="desc" />
  </div>
</template>
