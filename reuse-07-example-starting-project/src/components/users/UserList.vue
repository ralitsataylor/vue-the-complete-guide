<template>
  <base-container>
    <h2>Active Users</h2>
  <base-search v-model="enteredSearchTerm"></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import UserItem from './UserItem.vue';
import useSearch from '../../composables/search.js';
import { defineProps, ref, computed, defineEmits } from 'vue';

// Props: users array from parent
const props = defineProps(['users']);
defineEmits(['list-projects']);

// Property names in javascript are Strings
const { enteredSearchTerm, availableItems } = useSearch(props.users, 'fullName');

const sorting = ref(null);

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableItems.value;
  }
  return availableItems.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

function sort(mode) {
  sorting.value = mode;
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>