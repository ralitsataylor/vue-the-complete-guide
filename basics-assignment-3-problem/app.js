const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result(oldValue, newValue) {
      console.log("Watcher executing...");
      if (oldValue !== newValue) {
        const that = this;
        setTimeout(() => {
          that.number = 0;
          console.log(thats.number);
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addNumber(num) {
      this.number = this.number + num;
      console.log(this.number);
    },
  },
});
app.mount("#assignment");
