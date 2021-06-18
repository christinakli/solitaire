<template>
<div>
  <h1> solitaire </h1>

  <div class="cols">
    <div class="col">
      <DragDrop v-for="card in shuffledCards.slice(0,1)" :key="card.name" 
      :data="{cardInfo: card, col: 'c1'}" :ref="card.name"
      :dragZIndex="50" :dropTarget="'.dropTarget'" :revert="true">
        <Card :col="'c1'" :imgSrc="card.source" :isClicked="false" 
        :isFaceUp="true" />
      </DragDrop>
    </div>

    <div class="col">
      <DragDrop v-for="card in shuffledCards.slice(1,2)" :key="card.name"
      :revert="false">
        <Card :ref="card.name" :col="'c2'" :number="card.number"
        :suit="card.suit" :imgSrc="card.source" :isClicked="false" 
        :isFaceUp="false" :name="card.name"/>
      </DragDrop>


      <Card v-for="card in shuffledCards.slice(2,3)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="true" :name="card.name"/>
    </div>

    <div class="col">
      <Card v-for="card in shuffledCards.slice(3,5)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="false" :name="card.name"/>

      <Card v-for="card in shuffledCards.slice(5,6)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="true" :name="card.name"/>
    </div>

    <div class="col">
      <Card v-for="card in shuffledCards.slice(6,9)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="false" :name="card.name"/>

      <Card v-for="card in shuffledCards.slice(9,10)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="true" :name="card.name"/>
    </div>

    <div class="col">
      <Card v-for="card in shuffledCards.slice(10,14)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="false" :name="card.name"/>

      <Card v-for="card in shuffledCards.slice(14,15)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="true" :name="card.name"/>
    </div>

    <div class="col">
      <Card v-for="card in shuffledCards.slice(15,20)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="false" :name="card.name"/>

      <Card v-for="card in shuffledCards.slice(20,21)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="true" :name="card.name"/>
    </div>

    <div class="col">
      <Card v-for="card in shuffledCards.slice(21,27)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="false" :name="card.name"/>

      <Card v-for="card in shuffledCards.slice(27,28)" :ref="card.name" :col="'c2'" :number="card.number"
      :suit="card.suit" :key="card.name" :imgSrc="card.source" :isClicked="false" 
      :isFaceUp="true" :name="card.name"/>
    </div>
  </div>

  

  <Deck :y="5" :x="85" topCard=""/>
  <Deck :y="28" :x="85" topCard=""/>
  <Deck :y="51" :x="85" topCard=""/>
  <Deck :y="74" :x="85" topCard=""/>

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card'
import Deck from './components/Deck'
import DragDrop from '../../node_modules/jqwidgets-framework/jqwidgets-vue/vue_jqxdragdrop'
import cardData from './data/cards.js'

export default {
  name: 'App',
  data() {
    return {
      restricter: { left: -92, top: -92, width: 118, height: 118 },
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
        // width: 80 + '%',
        //float: 'left'
      }
    }
  },
  components: {
    Card,
    Deck,
    DragDrop
  },
  methods: {
    updateInfo(suit, number, isFaceUp, isClicked){
        this.currClickedSuit = suit;
        this.currClickedNumber = number;
        // console.log('isClicked: ' + isClicked);
    },
    reset(name){
      this.$refs[name].currStyle = this.normalStyle;
      this.$refs[this.currClickedKey].currStyle = this.normalStyle;
      this.$refs[name].disClicked = false;
      this.$refs[this.currClickedKey].disClicked = false;
      this.isOneClicked = false;
      this.isTwoClicked = false;
    },
    moveCards(movingCard, destCard){
      console.log('Moving the cards');
      // First clicked should be the one moving, second clicked is destination
      this.disabledClicking = false;
    },
    checkMove(name, suit, number){
        console.log('disabledClicking in checkmove: ' + this.disabledClicking);
        console.log('First clicked suit & num: ' + this.currClickedSuit + this.currClickedNumber);
        console.log('Now clicked suit & num: ' + suit + number);
        const canDoMove = true;
        if (canDoMove){
          setTimeout(() => { 
                      this.moveCards(this.currClickedKey, name);
                      this.moreThanTwoClicked = true;
                      // reset style
                      this.reset(name);
                    }, 2000);
          // this.moveCards();
        }
        else {
          this.moreThanTwoClicked = true;
          this.disabledClicking = false;
        }
        // this.disabledClicking = false;
    },
    clickStatus(col, suit, number, name, isFaceUp, isClicked){
      console.log(this.$refs[col]);
      if (!this.disabledClicking){
        console.log('One clicked: ' + name);
        // console.log('ref stuff: ' + JSON.stringify(this.$refs[name].highlightStyle));
        this.$refs[name].currStyle = this.$refs[name].highlightStyle;
      }
    
      console.log('isClicked in app: ' + isClicked);
      console.log('card clicked: name ' + name + ', suit: ' + suit + ', number: ' + number);
      this.moreThanTwoClicked = false; // HELPPPP I DON'T KNOW
      
      if (this.isOneClicked && !isClicked){
        console.log('One was clicked, now two are clicked');
        this.isTwoClicked = true;
        this.disabledClicking = true;
        this.checkMove(name, suit, number);
      }
      else if (this.isOneClicked && isClicked){
        console.log('One was clicked, now unclicking it');
        this.$refs[name].currStyle = this.normalStyle;
        this.isOneClicked = false;
      }
      else {
        this.isOneClicked = true;
        console.log('None were clicked, now one is clicked');
        this.currClickedSuit = suit;
        this.currClickedNumber = number;
        this.currClickedKey = name;
      }
      console.log('isOneClicked: ' + this.isOneClicked, 
      '\nisTwoClicked: ' + this.isTwoClicked, '\nmoreThanTwoClicked: ' + this.moreThanTwoClicked);
      // console.log('\n');
      console.log('\n');
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
        console.log(array[0]);
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
  margin-top: 30px;
}
.cols{
  /*
  float: left;
  width: 100%;
  */
  width:80%;
  display: flex;
  flex-direction: row;
}
.col{
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.dropTarget{
  background-color: #FBFFB5;
    width: 60px;
    height: 100px;
  
    left: 160px;
    top: 60px;
}
</style>
<style src='./assets/styles/jqwidgets/jqx.base.css'></style>
<style src='./assets/styles/jqwidgets/jqx.material-green.css'></style>