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
      console.log(this.goals);
    },
  },
});

app.mount("#user-goals");
