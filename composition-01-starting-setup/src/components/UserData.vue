<template>
  <h2>{{ userName }}</h2>
  <h3>{{ userAge }}</h3>
</template>

<script setup>
import { defineProps, computed, inject } from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
});

const userAge = inject('userAge');

const userName = computed(() => props.firstName + ' ' + props.lastName);
</script>
