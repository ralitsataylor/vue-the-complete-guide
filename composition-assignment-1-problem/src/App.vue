<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 :class="{ hidden: !courseGoal.isVisible }">{{ courseGoal.heading }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref } from 'vue';

const courseGoal = ref({
  heading: 'Mastering Vue.js 3 with the Composition API and TypeScript!',
  isVisible: true,
});

function toggleVisibility() {
  courseGoal.value.isVisible = !courseGoal.value.isVisible;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.hidden {
  visibility: hidden;
}
</style>
