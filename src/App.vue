
<template>
<html>
<body>
<div class="body">


<h1> bt21 solitaire </h1>

<button @click="startOver()" 
id="startOver"> Start Over </button>

<br>

<div class="layout">
    <div class="col dealt">
        <button @click="refreshCards" :disabled="!reshuffle"
        :style="{zIndex: 0, width: 50+'%'}">
            &#x1F504;
        </button>

        <img v-for="(card, index) in shuffledCards.slice(28,52)"
        :key="card.name" :id="card.name" class="col0"
        :style="{position: 'absolute', zIndex: `${52 - index}`}"
        :src="require('@/assets/' + card.source + '')"
        @click="changeCard(card.name)" draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)">

    
    </div>



    <div class="col">
    
      
        <img v-for="card in shuffledCards.slice(0,1)" class="col1"
        :key="card.name" :id="card.name" draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">
        
        

        <div class="target" id="target1"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class="col">
        <img v-for="card in shuffledCards.slice(1,2)" class="col2"
        :key="card.name" :id="card.name" :draggable="!card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="!card.disabled ? require('@/assets/' + card.source + '')
        : require('@/assets/card.png')">

        <img v-for="card in shuffledCards.slice(2,3)" class="col2"
        :key="card.name" :id="card.name" :draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">


        <div class="target" id="target2"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class="col">
        <img v-for="card in shuffledCards.slice(3,5)" class="col3"
        :key="card.name" :id="card.name" :draggable="!card.disabled"
        @dragstart="handleDragStart($event, card.name)"
        @dragend="handleDragEnd($event, card.name)"
        :src="!card.disabled ? require('@/assets/' + card.source + '')
        : require('@/assets/card.png')">

        <img v-for="card in shuffledCards.slice(5,6)" class="col3"
        :key="card.name" :id="card.name" :draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">


        <div class="target" id="target3"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class="col">
        <img v-for="card in shuffledCards.slice(6,9)" class="col4"
        :key="card.name" :id="card.name" :draggable="!card.disabled"
        @dragstart="handleDragStart($event, card.name)"
        @dragend="handleDragEnd($event, card.name)"
        :src="!card.disabled ? require('@/assets/' + card.source + '')
        : require('@/assets/card.png')">

        <img v-for="card in shuffledCards.slice(9,10)" class="col4"
        :key="card.name" :id="card.name" :draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">


        <div class="target" id="target4"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class="col">
        <img v-for="card in shuffledCards.slice(10,14)" class="col5"
        :key="card.name" :id="card.name" :draggable="!card.disabled"
        @dragstart="handleDragStart($event, card.name)"
        @dragend="handleDragEnd($event, card.name)"
        :src="!card.disabled ? require('@/assets/' + card.source + '')
        : require('@/assets/card.png')">

        <img v-for="card in shuffledCards.slice(14,15)" class="col5"
        :key="card.name" :id="card.name" :draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">


        <div class="target" id="target5"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class="col">
        <img v-for="card in shuffledCards.slice(15,20)" class="col6"
        :key="card.name" :id="card.name" :draggable="!card.disabled"
        @dragstart="handleDragStart($event, card.name)"
        @dragend="handleDragEnd($event, card.name)"
        :src="!card.disabled ? require('@/assets/' + card.source + '')
        : require('@/assets/card.png')">

        <img v-for="card in shuffledCards.slice(20,21)" class="col6"
        :key="card.name" :id="card.name" :draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">
        

        <div class="target" id="target6"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class="col">
        <img v-for="card in shuffledCards.slice(21,27)" class="col7"
        :key="card.name" :id="card.name" :draggable="!card.disabled"
        @dragstart="handleDragStart($event, card.name)"
        @dragend="handleDragEnd($event, card.name)"
        @click="changeClick(card)"
        :src="!card.disabled ? require('@/assets/' + card.source + '')
        : require('@/assets/card.png')">

        <img v-for="card in shuffledCards.slice(27,28)" class="col7"
        :key="card.name" :id="card.name" :draggable="card.disabled"
        @dragstart="handleDragStart($event)"
        @dragend="handleDragEnd($event)"
        :src="require('@/assets/' + card.source + '')">
        

        <div class="target" id="target7"
        @drop="dropHandler($event)"
        @dragover="handleDragOver($event)"
        @dragleave="handleDragLeave($event)">
            [target]
        </div>
    </div>

    <div class = "col decks">
        <div class="target colS" id="target-S" 
            @drop="dropHandler($event)"
            @dragover="handleDragOver($event)"
            @dragleave="handleDragLeave($event)">
                &#x2660; 
                <!-- <img id="label-S" :src="require('@/assets/' + 'spades/blankspades.jpeg')">
                -->
        </div>

            <br>

        <div class="target colH" id="target-H"
            @drop="dropHandler($event)"
            @dragover="handleDragOver($event)"
            @dragleave="handleDragLeave($event)">
                &#x2665; 
                <!-- <img id="label-H" :src="require('@/assets/' + 'hearts/blankhearts.jpeg')">
                -->
        </div>

            <br>

        <div class="target colD" id="target-D"
            @drop="dropHandler($event)"
            @dragover="handleDragOver($event)"
            @dragleave="handleDragLeave($event)">
                 
                &#x2666;  
                <!-- <img id="label-D" :src="require('@/assets/' + 'diamonds/blankdiamonds.jpeg')">
                -->
        </div>

            <br>

        <div class="target colC" id="target-C"
            @drop="dropHandler($event)"
            @dragover="handleDragOver($event)"
            @dragleave="handleDragLeave($event)">
                &#x2663;
                <!-- <img id="label-C" :src="require('@/assets/' + 'clubs/blankclubs.jpeg')">
                -->
        </div>

        </div>
    </div>

   


    <br>
    


</div>
</body>
</html>

</template>

<script>
/* eslint-disable no-console */
/* eslint-disable */

import DragDrop from '@/../node_modules/jqwidgets-scripts/jqwidgets-vue/vue_jqxdragdrop';
import cardData from './data/cards.js'

export default {
    name: 'App',
    components: {
        DragDrop
    },
    data() {
        return {
            cards: cardData,
            currentClicked: null,
            returnX: null,
            returnY: null,
            onTarget: false,
            currCardCol: null,
            prevCardCol: null,
            targetCol: null,
            targetCard: null,
            transferCards: [],
            remaining: 24,
            aceDeck: false,
            reshuffle: false
        }
    },
    methods: {
        startOver(){
            location.reload();
        },
        changeClick(card){
            card.disabled = !card.disabled;
        },
        refreshCards(){
            this.reshuffle = false;
            var arr = document.getElementsByClassName('col0');
            this.remaining = arr.length;
            console.log(this.remaining);
            for (var i = 0; i < arr.length; i++){
                var card = arr[i];
                console.log(card.style);
                // card = document.getElementById(card);

                card.style.zIndex = arr.length - i + 1;
                card.style.transitionDuration = '1s';
                card.style.transform = 'translate(0px, -0%)';
                // card.style.zIndex = this.remaining - card.style.zIndex;
            }
        }, 
        changeCard(id){
            // this.shuffledCards[51] = {color: 'red', suit: 'heart', number: 1, name:"1heart", source: 'src/assets/hearts/acehearts.png', disabled: true}
            // var newCard = this.shuffledCards[52 - this.remaining];
            // console.log(newCard);
            // this.remaining--;
            if (document.getElementById(id).className !== 'col0'){
                return;
            }

            // console.log('Changing the card', document.getElementById(id).className, id);
            this.remaining--;
            console.log(this.remaining);
            if (this.remaining <= 0){
                 //alert('Game over. No more cards remaining');
                this.reshuffle = true;
            }
            var card = document.getElementById(id);
            card.style.transitionDuration = '0s';
            card.style.transform = 'none';
            card.style.zIndex = 'none';


            card.style.transitionDuration = '1s';
            card.style.transform = 'translate(0px, 150%)'
            // setTimeout(function(){
                card.style.zIndex = 52 - card.style.zIndex;
            // }, 1000);
            

            // card.setAttribute('src', '@/assets/' + newCard.source + '');
            // this.currentDealt = newCard;
        },
        handleDragStart(event, id){
            var elem = document.getElementById(id);
            // elem.style.boxShadow = "0px 0px 10px blue";
            // console.log(event.target.className);


            var cardCol = event.target.className;
            // console.log('cardcoll: ', cardCol, id, event);
            if (cardCol === 'col0'){
                var arr = [];
                arr.push(event.target.id);
                event.dataTransfer.setData("text", arr);
                // console.log('Dragging', arr);
                this.currCardCol = '0';
                this.prevCardCol = 'col0';
                return;
            }
            this.currCardCol = cardCol[cardCol.length - 1];
            this.prevCardCol = cardCol;
            // console.log('this.prevCardCol: ', this.prevCardCol);
            // console.log('this.currCardCol', this.currCardCol);

            this.updateTransferList(event, cardCol);


            // Credit: https://stackoverflow.com/questions/7107243/html5-dragging-and-dropping-multiple-elements-between-multiple-browser-windows/22020559
            var dragList = [];
            var dragImage = document.createElement('div');
            // dragImage.style.width = '20%';
            // dragImage.style.height = '67px';

            // console.log(this.transferCards);
            var transferCards = this.transferCards;
            this.transferCards.forEach(function(elem, index){
                dragList.push(transferCards[index].id);

                // Credit: https://stackoverflow.com/questions/29131466/change-ghost-image-in-html5-drag-and-drop
                var temp = transferCards[index].cloneNode(true);
                temp.style.width = '44px';
                // temp.style.height = '67px';
                // temp.style.position = "absolute"; 
                temp.style.display = 'flex'; 
                temp.style.backgroundColor = 'none';
                dragImage.appendChild(temp);
            });


            // console.log("Dragging ", dragList);
            event.dataTransfer.setData("text", dragList);
            document.body.appendChild(dragImage);
            setTimeout(function() { dragImage.parentNode.removeChild(dragImage) });
            event.dataTransfer.setDragImage(dragImage, 0, 10);


            // event.dataTransfer.setData("text", event.target.id);
            
            // console.log('added data' + event.target.id);
            // console.log('target col: ' + this.currCardCol);

        },
        updateTransferList(event, col){
            // console.log(event);
            var cardList = [].slice.call(document.getElementsByClassName(col));
            // console.log(cardList);
            var index = -1;
            for (let i in cardList){
                // console.log(cardList[i].id);
                if (cardList[i].id === event.target.id){
                    index = i;
                    // console.log(index);
                }
            }
            var transferCards = cardList.slice(index, cardList.length);
            this.transferCards = [];
            // console.log('to be transferred: ');
            for (let card in transferCards){
                // console.log(transferCards[card]);
                this.transferCards.push(transferCards[card]);
            }
            // console.log('transferCards: ', this.transferCards);
        },
        handleDragEnd(event){
        },
        handleDragOver(event){
            console.log(event.target.id);
            document.getElementById(event.target.id).classList.add('targetHover');
            event.preventDefault();
        },
        handleDragLeave(event){
            document.getElementById(event.target.id).classList.remove('targetHover');
            console.log('bye');
        },
        dropHandler(event){
            document.getElementById(event.target.id).classList.remove('targetHover');
            // console.log("target id: " + event.target.id);
            
            // console.log(event.target.id.childNodes);
            var targetCol = event.target.id;
            var data = (event.dataTransfer.getData("text")).split(',');
            // console.log('data is: ', data);

            if (this.prevCardCol === 'col0'){
                // this.remaining--;
                // console.log('remaining: ' + this.remaining);
            }


            var targetVal;
            if (targetCol[0] === 't'){
                targetVal = targetCol[targetCol.length - 1];
            }
            else {
                var suit = targetCol.split('-')[1];
                targetVal = suit[0].toUpperCase();
            }   
            // var targetVal = targetCol[targetCol.length - 1];
            var col = 'col' + targetVal;
            var cards = document.getElementsByClassName(col);
            // console.log('Cardddddddds: ', cards, col, targetCol);
            // if (targetVal === 'H' || targetVal === 'C' ||
            // targetVal === 'S' || targetVal === 'D'){
            //     console.log('On a deck');
            //     this.targetCard = 'deck-' + targetVal;
            //     cards = document.getElementsByClassName('col8');
            //     if (cards.length > 1){
            //         this.targetCard = cards[cards.length - 1].id;
            //     }
            //     console.log(cards);
                
            // }
            // else 
            if (cards.length == 0){
                // console.log('No cards here currently', col);
                this.targetCard = 'empty';
            } 
            else {
                this.targetCard = cards[cards.length - 1].id;
                console.log('The target card is: ', this.targetCard);
            }

            if (this.cardMatch(data[0]) && this.colMatch(targetCol)){
                for (let i in data){
                    // console.log('data[i]', data[i]);
                    event.preventDefault();
                    event.target.appendChild(document.getElementById(data[i]));
                    
                    //this.moveTarget(event, data);
                    this.updateCards(event, data[i]);
                }
            }
            this.transferCards = [];
        },
        moveTarget(event, card){ // might not even need this function
            var elem = document.getElementById(event.target.id);
            var top = elem.getBoundingClientRect().top;
            var left = elem.getBoundingClientRect().left;
            // console.log('(Left, top): ', left, top);

            elem.style.transitionDuration = '0.5s';
            elem.style.backgroundColor = 'yellow';
            // elem.style.transform = 'translate(0px, 67px)';
            
        },
        updateCards(event, card){
            // Remove moved card from target
            // console.log('Card: ', card, event.target.id);
            var old = event.target.removeChild(document.getElementById(card));
            var colName = "col" + this.targetCol;
            // if (this.targetCol === 'c' || this.targetCol === 's' ||
            //     this.targetCol === 'd' || this.targetCol === 'h'){
            //         colName = "col8";
            // }
            // console.log('colName: ', colName);
            var colCards = document.getElementsByClassName(colName);
            var colCard = colCards[colCards.length - 1];
            // console.log(colCard);
            
            // Place old card below the front card of the col
            if (colName === 'colS' || colName === 'colD'
            || colName === 'colC' || colName === 'colH'){
                document.getElementById("target-" + this.targetCol).insertAdjacentElement('afterbegin', old);
                this.insertElement("target-" + this.targetCol);
                console.log('colCard: '); console.log(colCard.id); 
                // old.style.width = '50%';
            }
            else if (colCard != undefined){
                // colCard.draggable = false;
                // this.targetCard = colCard.id;
                document.getElementById(colCard.id).insertAdjacentElement('afterend', old);
                console.log('colCard: '); console.log(colCard.id);
            }
            else { // This is dead code I'm pretty sure
                // this.targetCard = '';
                // console.log('targetCol: ', this.targetCol);
                if (this.targetCol === 'c' || this.targetCol === 's' ||
                this.targetCol === 'd' || this.targetCol === 'h'){
                    console.log('poop');
                    document.getElementById("target-" + this.targetCol).insertAdjacentElement('beforeend', old);
                }
                else {
                    console.log('pee');
                    document.getElementById("target" + this.targetCol).insertAdjacentElement('beforebegin', old);
                }
            }
            
            //colCard = colCards[colCards.length - 1];
            old.classList.add(colName);
            // console.log(this.prevCardCol);
            old.classList.remove(this.prevCardCol);
            // console.log('old class list', old.classList);

            // console.log(old);
            // console.log('style', old.style);
            if (this.currCardCol === '0'){
                // console.log(old.style);
                old.style.zIndex = 'auto';
                old.style.width = '50%';
                old.style.position = '';
                old.style.transitionDuration = '';
                old.style.transform = '';
                // old.setAttribute('onClick', '');
                document.getElementById(old.id).onclick = function () {
                    // console.log('Doing nothinggg');
                };
            }

            // Change disabled-ness of new front cards
            var prevFronts = document.getElementsByClassName(this.prevCardCol);
            // console.log(prevFronts);
            var prevFront = prevFronts[prevFronts.length - 1];
            // console.log('prevFront', prevFront);
            if (prevFront != undefined){
                prevFront.draggable = true;
                var card = this.findCard(prevFront.id);
                if (card != null){
                    // console.log(card);
                    card.disabled = false;
                }
            }
            
        },
        insertElement(target){
            var list = document.getElementById(target).childNodes;
            console.log(list);
            var toRemove = list[list.length - 1];
            document.getElementById(target).removeChild(toRemove);
            console.log(toRemove.id);
            var card = list[0];
            card.style.width = '50%';
        },
        findCard(id){
            // console.log(id);
            for (let i in this.cards){
                // console.log(i, this.cards[i].name);
                if (this.cards[i].name === id){
                     // console.log(this.cards[i].name);
                     return this.cards[i];
                }
            }
            return null;
        },
        cardMatch(data){
            // console.log('data: ' + data);
            // console.log('target card: ', this.targetCard);
            // var className = document.getElementById(data).classList;
            var lastSuits;
            if (this.targetCard !== 'empty'){
                var lastSuits = document.getElementById(this.targetCard).classList;
                // console.log('lastSuits:', lastSuits);

                if ((lastSuits.contains('colD') || lastSuits.contains('colC')
                  || lastSuits.contains('colS') || lastSuits.contains('colH'))
                  && !lastSuits.contains('target')){
                    // console.log('Ace deck match');

                    var ret = (data.split('-')[0] - this.targetCard.split('-')[0] == 1
                    && data.split('-')[1] == this.targetCard.split('-')[1]);
                    this.aceDeck = ret;
                    return ret;
                }
            }
            
            // if (lastSuit == 'D' || lastSuit == 'H' || lastSuit == 'S' || lastSuit == 'C'){
            //     console.log('On an ace deck');
            // }
            
            if (this.targetCard === 'empty'){
                if (data.split('-')[0] == 13){
                    // console.log('mAtch');
                    return true;
                }
                return false;
            }
            else if (this.targetCard.split('-')[0] === 'target'){
                var suit = this.targetCard.split('-')[1];
                // console.log('The suit is: ', suit);
                if (data.split('-')[0] == 1){
                    if (data.split('-')[1] === 'spades' && suit == 'S'){
                        // console.log('Spades match');
                        // document.getElementById(data).classList.add('col8');
                        return true;
                    }
                    if (data.split('-')[1] === 'hearts' && suit == 'H'){
                        // console.log('Hearts match');
                        return true;
                    }
                    if (data.split('-')[1] === 'diamonds' && suit == 'D'){
                        // console.log('Diamonds match');
                        return true;
                    }
                    if (data.split('-')[1] === 'clubs' && suit == 'C'){
                        // console.log('Clubs match');
                        return true;
                    }
                }
                return false;
            }
            else if (this.targetCard.split('-')[1] == 8){
                // console.log('Hiiiii');
            }
            else {
                var targetNum = this.targetCard.split('-');
                var card = data.split('-')
                // console.log(targetNum[0], targetNum[1]);
                // console.log(card[0], card[1]);
                if (targetNum[0] - card[0] != 1){
                     return false;
                }
                else if (targetNum[1] === 'spades' || targetNum[1] === 'clubs'){
                    if (card[1] === 'hearts' || card[1] === 'diamonds'){
                        // console.log('Match')
                        return true;
                    }
                    return false;
                }
                else if (targetNum[1] === 'hearts' || targetNum[1] === 'diamonds'){
                    if (card[1] === 'spades' || card[1] === 'clubs'){
                        // console.log('mAtch');
                        return true;
                    }
                    return false;
                }
            }
            return false;
        },
        colMatch(target){
            var targetCol = target[target.length - 1];
            // console.log('target: ' + targetCol, 'card: ' + this.currCardCol, target);
            if (this.currCardCol == null || this.currCardCol == targetCol){
                return false;
            }
            if (this.aceDeck){
                var suit = target.split('-')[1][0]
                this.targetCol = suit.toUpperCase();
                this.aceDeck = false;
            }
            else {
                this.targetCol = targetCol;
            }
            return true;
        },
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
        // console.log(array[0]);
        return array;
    },
    cardSources(){
        var array = [];
        for (let card in this.shuffledCards){
            array.push(this.shuffledCards[card].source);
        }
        // console.log(array);
        return array;
    },
    currentDealt(){
        // this.remaining--;
        var card = this.shuffledCards[this.remaining];
        // console.log(card);
        return card;
    },
    nextDealt(){
        var card = this.shuffledCards[this.remaining];
        // console.log(card);
        return card;
    },
    gameOver(){
        for (var i = 0; i < 8; i++){
            var colName = 'col' + i;
            if (document.getElementsByClassName(colName).length != 0){
                return;
            }
        }
        alert('Game over!!!!! great job');
    }
  }
}
</script>


<style scoped>
h1{
    text-align: center;
    font-family: jellies;
    color: rgb(195, 139, 197);
    font-size: 40px;
    font-weight: normal;
}
.drag{
    background-color: yellow;
    width: 75px;
    height: 75px;
}

.target{
    background-color: transparent;
    width: 50%;
    height: 14%;
    color: transparent;
    /*
    border-style: solid;
    border-width: 1px;
    border-color:darkgrey;
    border-right: none;
    */
}

.targets .target{
    display: inline-block;
    margin-left: 10px;
}

.targetHover{
    background-color: rgb(228, 171, 230);
}

.dealt button{
    height: 14%;
    box-shadow: 0px 0px 5px 5px rgb(235, 192, 236);
}

.layout{
  /*
  float: left;
  width: 100%;
  */
  width:100%;
  height:70%;
  margin: none;
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


/*
img:hover{
    box-shadow: 0px 0px 10px yellow;
}
*/

.col img{
    width: 50%;
    height: 14%;
}



.body{

    width: 90%;
    margin-left:5%;
    margin-right: 5%;
    height: 65vh;
    margin-top: 5%;
    margin-bottom: 20%;
    background-color: white;
    border: 10px solid pink;
}


.dealt{
  position:relative;
  width: 100%;
  margin: 0px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.dealt img{
    width: 50%;
}


.topDealt{
    position:absolute;
    z-index: 1;

}

.topDealt2{
    position:absolute;
    z-index: 2;

}

.reset{
    transition-duration: 1s;
    transform: translate(0px, -0%);

}

.target img{
    
    width:100% !important;
    height:100%;
    
}

#target-D{
    color: rgb(216, 118, 164);
    border: 2px solid rgb(216, 118, 164);
    border-radius: 4px;
}

#target-C{
    color: black;
    border: 2px solid black;
    border-radius: 4px;
}

#target-H{
    color: rgb(216, 118, 164);
    border: 2px solid rgb(216, 118, 164);
    border-radius: 4px;
}

#target-S{
    color: black;
    border: 2px solid black;
    border-radius: 4px;
}

#startOver{
    position: absolute;
    top: 60px;
    right: 40px;
    width: 6%;
    height:6%;
    text-align: center;
    font-size:10px;
    font-weight: 10;
    border-radius: 50px;
    border: 4px solid black;
    font-family: jellies;
    color: rgb(195, 139, 197);
    background-color: rgb(209, 207, 207);
}


@font-face{
    font-family: billo;
    src: url(fonts/billo.ttf);
}
@font-face{
    font-family: jellies;
    src: url(fonts/jellies.ttf);
}

</style>

<style>
body{
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    object-fit: fill;
    background-color: #facfed;
}

html{
    min-height:100vh;
}
</style>