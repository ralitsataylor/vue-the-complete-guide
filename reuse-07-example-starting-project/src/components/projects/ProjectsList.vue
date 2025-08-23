<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
  <base-search v-if="hasProjects" v-model="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableItems"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import { defineProps, computed, watch, toRefs } from 'vue';

import ProjectItem from './ProjectItem.vue';
import useSearch from '../../composables/search';

// Props: user object from parent
const props = defineProps(['user']);

const { user } = toRefs(props);
// Defensive: always return an array 
const projects = computed(() => (user.value && Array.isArray(user.value.projects)) ? user.value.projects : []);

// Property names in javascript are Strings
const { enteredSearchTerm, availableItems, updateSearch } = useSearch(projects, 'title');

// Computed property to check if there are any projects to show
// Defensive: always return an array
const hasProjects = computed(() => Array.isArray(user.value?.projects) && availableItems.value.length > 0);

// Reset search term when user changes
watch(user, function () {
  // enteredSearchTerm.value = '';
  updateSearch('');
});
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>