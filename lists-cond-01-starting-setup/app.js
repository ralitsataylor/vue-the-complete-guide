const app = Vue.createApp({
  data() {
    return { goals: ["first goal", "second goal", "third goal"] };
  },
});

app.mount("#user-goals");
