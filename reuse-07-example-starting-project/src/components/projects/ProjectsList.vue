<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
  <base-search v-if="hasProjects" v-model="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
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
const projects = computed(() => user.value ? user.value.projects : []);

// Property names in javascript are Strings
const { enteredSearchTerm, availableItems } = useSearch(projects, 'title');

// Computed property to check if there are any projects to show
const hasProjects = computed(() => {
  return props.user.projects && availableItems.value.length > 0;
});



// Reset search term when user changes
watch(user, function () {
  enteredSearchTerm.value = '';
});
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>