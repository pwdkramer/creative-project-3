var app = new Vue({
  el: "#app",
  data: function () {
    return {
      waiting: true,
      userPick: null,
      randPick: null,
      userScore: 0,
      computerScore: 0
    };
  },
  methods: {
    choose: function (pick) {
      this.userPick = pick;
      const picks = ['rock', 'paper', 'scissors'];
      this.randPick = picks[Math.floor(Math.random() * picks.length)];
      this.setScore();
      this.waiting = false;
    },
    setScore: function () {
      if (this.userPick == 'rock') {
        if (this.randPick == 'paper') {
          console.log('Computer wins');
          this.computerScore++;
        } else if (this.randPick == 'scissors') {
          console.log('User wins');
          this.userScore++;
        } else {
          console.log('Draw');
        }
      } else if (this.userPick == 'paper') {
        if (this.randPick == 'rock') {
          console.log('User wins');
          this.userScore++;
        } else if (this.randPick == 'scissors') {
          console.log('Computer wins');
          this.computerScore++;
        } else {
          console.log('Draw');
        }
      } else {
        if (this.randPick == 'rock') {
          console.log('Computer wins');
          this.computerScore++;
        } else if (this.randPick == 'paper') {
          console.log('User wins');
          this.userScore++;
        } else {
          console.log('Draw');
        }
      }
    }
  },
  computed: {
    computedUser: function () {
      return {
        "Waiting on you...": this.randPick === null,
        "ROCK": this.randPick === "rock",
        "PAPER": this.randPick === "paper",
        "SCISSORS": this.randPick === "scissors"
      };
    },
    computedRand: function () {
      return {
        "Waiting on you...": this.randPick === null,
        "ROCK": this.randPick === "rock",
        "PAPER": this.randPick === "paper",
        "SCISSORS": this.randPick === "scissors"
      };
    }
  }
});
