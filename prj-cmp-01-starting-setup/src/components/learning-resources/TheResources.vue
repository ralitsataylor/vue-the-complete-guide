<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      type="default"
      :mode="storedResButtonMode"
      caption="Stored Resources"
    ></base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      type="default"
      :mode="addResButtonMode"
      caption="Add Resource"
    ></base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? 'none' : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? 'none' : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
