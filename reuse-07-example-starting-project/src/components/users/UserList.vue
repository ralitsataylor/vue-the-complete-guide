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
import { defineProps, ref, computed, defineEmits, toRefs, watch } from 'vue';

import UserItem from './UserItem.vue';
import useSearch from '../../composables/search.js';

// Props: users array from parent
const props = defineProps(['users']);
defineEmits(['list-projects']);

const { users } = toRefs(props);

// Property names in javascript are Strings
const { enteredSearchTerm, availableItems, updateSearch } = useSearch(users, 'fullName');

const sorting = ref(null);

const displayedUsers = computed(() => {
  const items = Array.isArray(availableItems.value) ? availableItems.value : [];
  if (!sorting.value) {
    return items;
  }
  return items.slice().sort((u1, u2) => {
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