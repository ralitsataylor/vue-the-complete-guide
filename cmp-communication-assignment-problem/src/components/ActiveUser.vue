<template>
  <section>
    <h3>{{ username }}</h3>
    <h2>{{ userage }} Years</h2>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
};
</script>
