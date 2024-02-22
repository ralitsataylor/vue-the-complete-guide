const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + 5;
    },
    reduce(num) {
      this.counter = this.counter - 5;
    },
  },
});

app.mount("#events");
