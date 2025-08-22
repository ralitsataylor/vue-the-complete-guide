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
import ProjectItem from './ProjectItem.vue';
import { ref, defineProps, computed, watch } from 'vue';

// This ref is bound to the BaseSearch input via v-model
const enteredSearchTerm = ref('');
// This ref is used for debounced searching
const activeSearchTerm = ref('');

// Props: user object from parent
const props = defineProps(['user']);

// Computed property to check if there are any projects to show
const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

// Debounce: only update activeSearchTerm if the user stops typing for 300ms
watch(enteredSearchTerm, function (newValue) {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 300);
});

// Reset search term when user changes
watch(props, function () {
  enteredSearchTerm.value = '';
});

// Computed property to filter projects by the search term (case-sensitive)
// This is reactive and updates when activeSearchTerm changes
const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>