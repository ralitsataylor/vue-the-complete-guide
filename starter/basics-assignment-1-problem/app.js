const app = Vue.createApp({
  data() {
    return {
      name: "Ralitsa Ivanova Voronevska",
      age: 36,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandomNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
