<template>
    <!-- <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> -->
    <span class="text-gray-500 ">
          {{ displayText.join("") }}
    </span>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      speed: {
        type: Number,
        default: 500
      },
      deleteSpeed: {
        type: Number,
        default: 166
      },
      words: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        displayText: [],
        currentWord: "",
        wordIdx: 0,
        timeoutSpeed: 0 
      };
    },
    computed: {
      // can adjust speeds based on other factors if needed
      // TYPE_SPEED() { return this.speed } ,
      // DELETE_SPEED(){ return this.deleteSpeed },
      // timeoutSpeed() { return this.TYPE_SPEED * 0.8 },
      TYPE_SPEED() { return this.speed },
      DELETE_SPEED() { return this.deleteSpeed },
    },
    mounted() {
      this.timeoutSpeed = this.TYPE_SPEED * 0.8;
      this.start();
    },
    methods: {
      start() {
        if (this.words && this.words.length > 0) {
          this.currentWord = this.words[this.wordIdx].split("");
          this.wordIdx++;
          this.animate = setTimeout(this.type, this.timeoutSpeed);
        }
      },
      type(word) {
        // if typing...
        if (this.currentWord.length > 0) {
          this.displayText.push(this.currentWord.shift());
          // if done typing, then delete
        } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
          this.timeoutSpeed = this.DELETE_SPEED;
          this.displayText.pop();
          // if done typing & deleting
        } else if (
          this.currentWord.length === 0 &&
          this.displayText.length === 0
        ) {
          // change words
          if (this.wordIdx < this.words.length) {
            this.currentWord = this.words[this.wordIdx].split("");
            this.wordIdx++;
            this.timeoutSpeed = this.TYPE_SPEED;
            this.displayText.push(this.currentWord.shift());
          } else {
            // reset
            this.wordIdx = 0;
            this.currentWord = this.words[this.wordIdx].split("");
            this.displayText.push(this.currentWord.shift());
          }
        }
        setTimeout(this.type, this.timeoutSpeed);
      }
    }
  }
  </script>