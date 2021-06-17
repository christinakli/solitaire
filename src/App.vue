<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1> solitaire </h1>
  <Card col="1" suit="" color=""/>
  <Card col="2" suit="" color=""/>
  <Card col="3" suit="" color=""/>
  <Card col="4" suit="" color=""/>
  <Card col="5" suit="" color=""/>
  <Card col="6" suit="" color=""/>
  <Card col="7" suit="" color=""/>

  <Deck y="5" x="85"/>
  <Deck y="28" x="85"/>
  <Deck y="51" x="85"/>
  <Deck y="74" x="85"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import Deck from './components/Deck.vue'
export default {
  name: 'App',
  data() {
    return {
      isOneClicked: false,
      isTwoClicked: false,
      currClickedSuit: '',
      currClickedColor: ''
    }
  },
  components: {
    Card,
    Deck
  },
  methods: {
    checkMove(col, suit, color){
      console.log('col clicked: ' + col + ', suit: ' + suit + ', color' + color);
      this.isOneClicked = !this.isOneClicked;
      if (this.isOneClicked){
        // isOne = true ==> only one is clicked
        console.log('One is clicked');
        this.isTwoClicked = false;
        console.log('isTwoClicked: ' + this.isTwoClicked);
      }
      else {
        // isOne = false ==> it used to be true ==> there had been one clciked
        // ==> clicking this one makes it 2 clicked ==> isTwo = true
        console.log('Two are clicked');
        this.isTwoClicked = true;
        console.log('isTwoClicked: ' + this.isTwoClicked);
      }
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
