const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    saveInput(event) {
      this.userInput = event.target.value;
    },
    showAlert() {
      alert("This is an alert!");
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
