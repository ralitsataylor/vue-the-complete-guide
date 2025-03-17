<template>
  <h2>{{ userName }}</h2>
  <h3>{{ userAge }}</h3>
</template>

<script setup>
import {
  defineProps,
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
});

const userAge = inject('userAge');

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

const userName = computed(() => props.firstName + ' ' + props.lastName);
</script>
