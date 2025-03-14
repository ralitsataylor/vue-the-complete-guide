<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="" placeholder="First Name" v-model="firstName" />
      <input type="" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// const userName = ref('Maximilian');
const userAge = ref(36);
const firstName = ref('');
const lastName = ref('');

// const user = reactive({
//   name: 'Maximilian',
//   age: 31,
// });

// setTimeout(function () {
//   // user.value.name = 'Max';
//   // user.value.age = 32;
//   user.name = 'Max';
//   user.age = 32;
// }, 2000);

// a computed (read-only) ref
const userName = computed(() => firstName.value + ' ' + lastName.value);

watch([userAge, userName], function (newValues, oldValues) {
  console.log('Old age: ' + oldValues[0]);
  console.log('New age: ' + newValues[0]);
  console.log('Old name: ' + oldValues[1]);
  console.log('New name: ' + newValues[1]);
});

function setNewAge() {
  userAge.value = 37;
}

// watch: {
//   age(val) {
//     console.log(val);
//   }
// }
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
