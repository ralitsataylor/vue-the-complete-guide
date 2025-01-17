<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
export default {
  methods: {
    ...mapActions(['login', 'logout']),
    // login() {
    //   this.$store.dispatch('login');
    // },
    // logout() {
    //   this.$store.dispatch('logout');
    // },
  },
  computed: {
    // ...mapGetters(['userIsAuthenticated', 'testAuth']),
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    testAuth() {
      return this.$store.getters['numbers/testAuth'];
    },
  },
};
</script>
