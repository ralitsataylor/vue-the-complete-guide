<template>
  <li>
    <h3>{{ title }}</h3>
  </li>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

// Use toRefs to destructure props while keeping reactivity
const props = defineProps(['title']);
const { title } = toRefs(props);
</script>

<style scoped>
li {
  background-color: #00006b;
  color: white;
  padding: 0.5rem;
  margin: 1rem 0;
}

li h3 {
  margin: 0;
}
</style>