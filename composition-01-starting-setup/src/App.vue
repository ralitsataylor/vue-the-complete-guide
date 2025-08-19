<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="" placeholder="First Name" v-model="firstName" />
      <input type="" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

// const userName = ref('Maximilian');

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);
const userAge = ref(37);

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

provide('userAge', userAge);

// a computed (read-only) ref
const userName = computed(() => firstName.value + ' ' + lastName.value);

watch([userAge, userName], function (newValues, oldValues) {
  console.log('Old age: ' + oldValues[0]);
  console.log('New age: ' + newValues[0]);
  console.log('Old name: ' + oldValues[1]);
  console.log('New name: ' + newValues[1]);
});

function setNewAge() {
  userAge.value = 38;
}

function setLastName() {
  // lastName.value = this.$refs.lastNameInput.value;
  lastName.value = lastNameInput.value.value;
}

// watch: {
//   age(val) {
//     console.log(val);
//   }
// }

// provide() {
//   return {
//     userAge: this.userAge
//   };
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
