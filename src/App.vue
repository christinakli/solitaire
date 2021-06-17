
<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1> solitaire </h1>
  <Card :col="1" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="2" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="3" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="4" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="5" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="6" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="7" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>

  <!--
  <Card v-for="card in cards" :col="1" :suit="card.suit" :key="card.name"/>
  -->

  <Deck :y="5" :x="85"/>
  <Deck :y="28" :x="85"/>
  <Deck :y="51" :x="85"/>
  <Deck :y="74" :x="85"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import Deck from './components/Deck.vue'
import cardData from './data/cards.js'
export default {
  name: 'App',
  data() {
    return {
      isOneClicked: false,
      isTwoClicked: false,
      moreThanTwoClicked: false,
      currClickedSuit: '',
      currClickedNumber: '',
      cards: cardData
    }
  },
  components: {
    Card,
    Deck
  },
  methods: {
    updateInfo(suit, number, isFaceUp, isClicked){
        this.currClickedSuit = suit;
        this.currClickedNumber = number;
        console.log('isClicked: ' + isClicked);
    },
    checkMove(col, suit, number, isFaceUp, isClicked){
      console.log('card clicked: col ' + col + ', suit: ' + suit + ', number: ' + number);
      
      if (this.isOneClicked){
        // One is clicked ==> the current click is for the second click
        this.isOneClicked = false;
        this.isTwoClicked = true;
        console.log('Two are now clicked');
      }
      else {
        // One is NOT clicked ==> either 2 are clicked, or none are clicked
        if (!this.isTwoClicked){
          // Two are NOT clicked ==> none are clicked
          this.isOneClicked = true;
          console.log('None were clicked, now one is clicked');
        }
        else {
          console.log('Two were clicked; no change');
          this.isTwoClicked = false;
          this.isOneClicked = true; // idk???????
          this.moreThanTwoClicked = true;
        }
      }
      console.log('isOneClicked: ' + this.isOneClicked, 
      '\nisTwoClicked: ' + this.isTwoClicked, '\nmoreThanTwoClicked: ' + this.moreThanTwoClicked);
    }
  },
  computed: {
    shuffledCards(){
        // Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
				var array = this.cards;
				var currentIndex = array.length, randomIndex;
  				while (0 !== currentIndex) {
    				randomIndex = Math.floor(Math.random() * currentIndex);
    				currentIndex--;
    				[array[currentIndex], array[randomIndex]] = [
      				array[randomIndex], array[currentIndex]];
          }
        return array;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
