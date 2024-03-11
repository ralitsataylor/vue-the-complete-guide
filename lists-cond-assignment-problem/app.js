const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      listVisibility: true,
    };
  },
  computed: {
    buttonCption() {
      return this.listVisibility ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    toggleListVisibility() {
      this.listVisibility = !this.listVisibility;
    },
  },
});

app.mount("#assignment");
