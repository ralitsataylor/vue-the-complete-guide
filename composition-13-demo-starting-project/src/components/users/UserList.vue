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
import { defineProps, ref, computed, watch, defineEmits } from 'vue';

// Props: users array from parent
const props = defineProps(['users']);
defineEmits(['list-projects']);

// This ref is bound to the BaseSearch input via v-model
const enteredSearchTerm = ref('');
// This ref is used for debounced searching
const activeSearchTerm = ref('');

// Computed property to filter users by the search term (case-insensitive)
// This is reactive and updates when activeSearchTerm changes
const availableUsers = computed(() => {
  let users = [];
  if (activeSearchTerm.value) {
    const search = activeSearchTerm.value.toLowerCase();
    users = props.users.filter((usr) =>
      usr.fullName.toLowerCase().includes(search)
    );
  } else if (props.users) {
    users = props.users;
  }
  return users;
});

// function updateSearch(val) {
//   enteredSearchTerm.value = val;
// }

// Debounce: only update activeSearchTerm if the user stops typing for 300ms
watch(enteredSearchTerm, function (newValue) {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 300);
});

const sorting = ref(null);

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
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

<!-- <script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  data() {
    return {
      enteredSearchTerm: '',
      activeSearchTerm: '',
      sorting: null,
    };
  },
  computed: {
    availableUsers() {
      let users = [];
      if (this.activeSearchTerm) {
        users = this.users.filter((usr) =>
          usr.fullName.includes(this.activeSearchTerm)
        );
      } else if (this.users) {
        users = this.users;
      }
      return users;
    },
    displayedUsers() {
      if (!this.sorting) {
        return this.availableUsers;
      }
      return this.availableUsers.slice().sort((u1, u2) => {
        if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (this.sorting === 'asc') {
          return -1;
        } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      });
    },
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
    sort(mode) {
      this.sorting = mode;
    },
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    }
  },
};
</script> -->

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
