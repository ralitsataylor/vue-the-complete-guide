const app = Vue.createApp({
  data() {
    return {
      inputGoals: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
    },
  },
});

app.mount("#user-goals");
