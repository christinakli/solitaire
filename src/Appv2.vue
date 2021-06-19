<template>
<div>
  <h1> solitaire </h1>

  <div class="layout">
    <div class="col">
      
    </div>


  </div>

  <div id="drop" class="dropTarget">
      this is a drop target
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
      onTarget: false,
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
  mounted(){
      this.cardsRendering();
  },
  methods: {
    cardsRendering(){
        let layout = document.getElementById('layout');

        let element = document.createElement('card');
        element.classList.add('cards');

        element.style.cssText = 'left: 0px; top: 0px';
        element.innerHTML =
        `<div>
            <img src="assets/card.png">
        </div>`

        layout.appendChild(element);

        let widget = jqwidgets.createInstance('.cards', 'jqxDragDrop', { dropTarget: $('#drop'), revert: true });
        console.log(widget);

        widget.addEventHandler('dropTargetEnter', (event) => {
            event.args.target[0].style.border = '2px solid #000';
            this.onCart = true;
            widget.dropAction = 'none';
        });
        widget.addEventHandler('dropTargetLeave', (event) => {
            event.args.target[0].style.border = '2px solid #aaa';
            this.onCart = false;
            widget.dropAction = 'default';
                    });
                    widget.addEventHandler('dragEnd', (event) => {
                        let cartElement = document.getElementById('cart');
                        cartElement.style.border = '2px dashed #aaa';
                        if (this.onCart) {
                            // let price = (widgetChilds[1]).innerText.substr(8, 11);
                            let price = '0';
                            // let name = (widgetChilds[2]).alt;
                            // this.addItem({ price: price, name: name });
                            this.onCart = false;
                            element.innerHTML = `<div class="jqx-rc-t draggable-demo-product-header jqx-widget-header-${this.theme} jqx-fill-state-normal-${this.theme}">
                      <div class="draggable-demo-product-header-label"> </div>
                      </div>`
                        }
                    });
                    widget.addEventHandler('dragStart', () => {
                        let cartElement = document.getElementById('cart');
                        cartElement.style.border = '2px solid #aaa';
                    });

    },
    dropTargetEnter(event, name){
      console.log(event, name);
      console.log(this.$refs[name]);
      // this.$refs[name].revert = true;
      this.$refs[name].dropAction = 'none';
      this.onTarget = true;
    },
    onDragEnd(event, name){
      //this.$refs[name].dropAction = 'default';
    },
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
.layout{
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
    width: 300px;
    height: 200px;
  
    left: 160px;
    top: 60px;
}
.jqx-draggable-dragging{
  width: 10%;
}



</style>
<style src='./assets/styles/jqwidgets/jqx.base.css'></style>
<style src='./assets/styles/jqwidgets/jqx.light.css'></style>