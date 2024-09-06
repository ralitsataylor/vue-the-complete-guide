<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource">
      <p>{{ resource.id }}</p>
      <p>{{ resource.title }}</p>
      <p>{{ resource.description }}</p>
      <p>{{ resource.link }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
