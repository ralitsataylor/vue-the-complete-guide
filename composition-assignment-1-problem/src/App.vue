<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 :class="{ hidden: !goalVisibility }">{{ goal }}</h3> -->
  <!-- <h3 :class="{ hidden: !courseData.goalVisibility }">{{ goal }}</h3> -->
  <h3 :class="{ hidden: !goalVisibility }">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<!-- <script setup>
import { ref } from 'vue';
const goal = ref('Mastering Vue.js 3 with the Composition API and TypeScript!');
const goalVisibility = ref(true);  

const courseData = ref({
  goal: 'Mastering Vue.js 3 with the Composition API and TypeScript!',
  goalVisibility: true,
});

import { reactive } from 'vue';
const courseData = reactive({
  goal: 'Mastering Vue.js 3 with the Composition API and TypeScript!',
  goalVisibility: true,
});

function toggleGoalVisibility() {
  courseData.value.goalVisibility = !courseData.value.goalVisibility;
  courseData.goalVisibility = !courseData.goalVisibility;
}
</script> -->

<script>
export default {
  data() {
    return {
      goal: 'Mastering Vue.js 3 with the Composition API and TypeScript!',
      goalVisibility: true,
    };
  },
  methods: {
    toggleGoalVisibility() {
      this.goalVisibility = !this.goalVisibility;
    },
  },
};
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
