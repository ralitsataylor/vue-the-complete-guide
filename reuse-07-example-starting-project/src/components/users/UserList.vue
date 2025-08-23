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
import { defineProps, defineEmits, toRefs, watch } from 'vue';

import UserItem from './UserItem.vue';
import useSearch from '../../composables/search.js';
import useSort from '../../composables/sort.js';

// Props: users array from parent
const props = defineProps(['users']);
defineEmits(['list-projects']);

const { users } = toRefs(props);

// Property names in javascript are Strings
// Computed properties under the hood are just a read-only ref
const { enteredSearchTerm, availableItems, updateSearch } = useSearch(users, 'fullName');

const { sorting, displayedUsers, sort } = useSort(availableItems, 'fullName');

// Reset search term when user changes
// Deep watch for array changes
watch(users, () => {
  updateSearch('');
}, { deep: true });
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>