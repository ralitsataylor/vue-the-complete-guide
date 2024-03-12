function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      mosterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      // Formula for calculating a Random Number between 5 and 12
      const attackValue = getRandomValue(5, 12);
      this.mosterHealth -= attackValue;
      console.log(this.mosterHealth);
      this.attackPlayer();
      console.log(this.playerHealth);
    },
    attackPlayer() {
      // Formula for calculating a Random Number between 8 and 15
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
