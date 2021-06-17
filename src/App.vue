<template>
  <h1> solitaire </h1>
  <Card ref="c1" :col="'c1'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card ref="c2" :col="'c2'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card ref="c3" :col="'c3'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card ref="c4" :col="'c4'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card ref="c5" :col="'c5'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card ref="c6" :col="'c6'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>
  <Card ref="c7" :col="'c7'" :number="0" suit="" :isClicked="false" :isFaceUp="false"/>

  <!--
  <Card v-for="card in cards" :col="1" :suit="card.suit" :key="card.name"/>
  -->

  <Deck :y="5" :x="85" topCard=""/>
  <Deck :y="28" :x="85" topCard=""/>
  <Deck :y="51" :x="85" topCard=""/>
  <Deck :y="74" :x="85" topCard=""/>
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
      disabledClicking: false,
      currClickedSuit: '',
      currClickedNumber: '',
      currClickedKey: '',
      oldClickedSuit: '',
      oldClickedNumber: '',
      cards: cardData,
      normalStyle: {
        backgroundColor: 'transparent',
        width: 10 + '%',
        float: 'left'
      }
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
        // console.log('isClicked: ' + isClicked);
    },
    reset(col){
      this.$refs[col].highlightStyle = this.normalStyle;
      this.$refs[this.currClickedKey].highlightStyle = this.normalStyle;
      this.$refs[col].disClicked = false;
      this.$refs[this.currClickedKey].disClicked = false;
      this.isOneClicked = false;
      this.isTwoClicked = false;
    },
    moveCards(movingCard, destCard){
      console.log('Moving the cards');
      // First clicked should be the one moving, second clicked is destination
      this.disabledClicking = false;
    },
    checkMove(col, suit, number){
        console.log('disabledClicking in checkmove: ' + this.disabledClicking);
        console.log('First clicked suit & num: ' + this.currClickedSuit + this.currClickedNumber);
        console.log('Now clicked suit & num: ' + suit + number);
        const canDoMove = true;
        if (canDoMove){
          setTimeout(() => { 
                      this.moveCards(this.currClickedKey, col);
                      this.moreThanTwoClicked = true;
                      // reset style
                      this.reset(col);
                    }, 2000);
          // this.moveCards();
        }
        else {
          this.moreThanTwoClicked = true;
          this.disabledClicking = false;
        }
        // this.disabledClicking = false;
    },
    clickStatus(col, suit, number, isFaceUp, isClicked){
      console.log(this.$refs[col]);
      if (!this.disabledClicking){
        this.$refs[col].highlightStyle = { backgroundColor: "#fffdb3" };
      }
    
      console.log('isClicked in app: ' + isClicked);
      console.log('card clicked: col ' + col + ', suit: ' + suit + ', number: ' + number);
      this.moreThanTwoClicked = false; // HELPPPP I DON'T KNOW
      
      if (this.isOneClicked && !isClicked){
        console.log('One was clicked, now two are clicked');
        this.isTwoClicked = true;
        this.disabledClicking = true;
        this.checkMove(col, suit, number);
      }
      else if (this.isOneClicked && isClicked){
        console.log('One was clicked, now unclicking it');
        this.$refs[col].highlightStyle = this.normalStyle;
        this.isOneClicked = false;
      }
      else {
        this.isOneClicked = true;
        console.log('None were clicked, now one is clicked');
        this.currClickedSuit = suit;
        this.currClickedNumber = number;
        this.currClickedKey = col;
      }
      console.log('isOneClicked: ' + this.isOneClicked, 
      '\nisTwoClicked: ' + this.isTwoClicked, '\nmoreThanTwoClicked: ' + this.moreThanTwoClicked);
      // console.log('\n');
      console.log('\n');
      // if (!isClicked){ // Allows for un-highlighting
      //   console.log('Time for unhighlighting');
      //   if (this.isOneClicked){
      //     this.isOneClicked = false;
      //   }
      //   else { // this.isOneClicked = false
      //     this.isOneClicked = true;
      //     this.isTwoClicked = false;
      //   }
      //   // else if (this.isTwoClicked){
      //   //   this.isTwoClicked = false;
      //   // }
      //   console.log('isOneClicked: ' + this.isOneClicked, 
      //   '\nisTwoClicked: ' + this.isTwoClicked, '\nmoreThanTwoClicked: ' + this.moreThanTwoClicked);
      //   console.log('\n');
      //   return;
      // }
      
      // if (this.isOneClicked && isClicked){
      //   // One is clicked ==> the current click is for the second click
      //   this.isOneClicked = false;
      //   this.isTwoClicked = true;
      //   console.log('Two are now clicked');
      //   this.checkMove(col, suit, number);
      // }
      // else {
      //   // One is NOT clicked ==> either 2 are clicked, or none are clicked
      //   if (!this.isTwoClicked){
      //     // Two are NOT clicked ==> none are clicked
      //     this.isOneClicked = true;
      //     this.currClickedSuit = suit;
      //     this.currClickedNumber = number;
      //     console.log('None were clicked, now one is clicked');
      //   }
      //   else {
      //     console.log('Two were clicked; unhighlight them');
      //     this.isTwoClicked = false;
      //     // this.isOneClicked = true; // idk???????
      //     this.moreThanTwoClicked = true;
      //   }
      // }
      // console.log('isOneClicked: ' + this.isOneClicked, 
      // '\nisTwoClicked: ' + this.isTwoClicked, '\nmoreThanTwoClicked: ' + this.moreThanTwoClicked);
      // console.log('\n');
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
