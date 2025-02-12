<template>
  DETAILS FOR COACH
  <router-view></router-view>
  <router-link :to="coachContactLink">Contact</router-link>
</template>

<script>
export default {
  computed: {
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`; // /coaches/c1/contact
    },
  },
};
</script>
