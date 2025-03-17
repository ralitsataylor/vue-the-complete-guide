<template>
  <h2>{{ userName }}</h2>
  <h3>{{ userAge }}</h3>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
  userAge: Number,
});

const userName = computed(() => props.firstName + ' ' + props.lastName);
</script>
