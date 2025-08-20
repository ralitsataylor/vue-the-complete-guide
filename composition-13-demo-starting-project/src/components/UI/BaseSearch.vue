<template>
  <form>
    <input
      type="search"
      :value="props.modelValue"
      @input="search($event)"
      placeholder="Filter items"
    />
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// This component is designed for use with v-model in Vue 3 Composition API.
// The parent passes a value via the 'modelValue' prop, and expects updates via 'update:modelValue' events.
const props = defineProps({ modelValue: String });
const emit = defineEmits(['update:modelValue']);

// Emit the new value whenever the user types in the input.
// This keeps the parent in sync with the input field.
function search($event) {
  emit('update:modelValue', $event.target.value);
}
</script>

<!-- <script>
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
};
</script> -->

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>
