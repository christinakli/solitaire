<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1> solitaire </h1>
  <Card :col="1" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="2" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="3" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="4" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="5" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="6" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>
  <Card :col="7" :suit="0" color="" :isClicked="false" :isFaceUp="false"/>

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
      currClickedSuit: '',
      currClickedColor: '',
      cards: cardData
    }
  },
  components: {
    Card,
    Deck
  },
  methods: {
    checkMove(col, suit, color){
      console.log('col clicked: ' + col + ', suit: ' + suit + ', color' + color);
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
        }
      }
        
      // this.isOneClicked = !this.isOneClicked;
      // if (this.isOneClicked){
      //   // isOne = true ==> only one is clicked
      //   console.log('One is clicked');
      //   this.isTwoClicked = false;
      //   console.log('isTwoClicked: ' + this.isTwoClicked);
      // }
      // else {
      //   // isOne = false ==> it used to be true ==> there had been one clciked
      //   // ==> clicking this one makes it 2 clicked ==> isTwo = true
      //   console.log('Two are clicked');
      //   this.isTwoClicked = true;
      //   console.log('isTwoClicked: ' + this.isTwoClicked);
      // }
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
