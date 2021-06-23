
<template>
<div class="body">


<h1 :style="{textAlign: 'center'}"> solitaire </h1>

<div class="layout">
    <div class="dealt col">
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
        @dragover="handleDragOver($event)">
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
        @dragover="handleDragOver($event)">
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
        @dragover="handleDragOver($event)">
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
        @dragover="handleDragOver($event)">
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
        @dragover="handleDragOver($event)">
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
        @dragover="handleDragOver($event)">
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
        @dragover="handleDragOver($event)">
            [target]
        </div>
    </div>

   


    <br>
    


</div>



</div>
</template>

<script>
/* eslint-disable no-console */

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
            remaining: 24
        }
    },
    methods: {
        changeClick(card){
            card.disabled = !card.disabled;
        },
        changeCard(id){
            // this.shuffledCards[51] = {color: 'red', suit: 'heart', number: 1, name:"1heart", source: 'src/assets/hearts/acehearts.png', disabled: true}
            // var newCard = this.shuffledCards[52 - this.remaining];
            // console.log(newCard);
            // this.remaining--;
            if (this.remaining <= 0){
                alert('Game over. No more cards remaining');
            }
            var card = document.getElementById(id);
            card.style.transitionDuration = '1s';
            card.style.transform = 'translate(0px, 150%)'
            setTimeout(function(){
                card.style.zIndex = 52 - card.style.zIndex;
            }, 1200);
            

            // card.setAttribute('src', '@/assets/' + newCard.source + '');
            // this.currentDealt = newCard;
        },
        handleDragStart(event, id){
            var elem = document.getElementById(id);
            // elem.style.boxShadow = "0px 0px 10px blue";
            // console.log(event.target.className);


            var cardCol = event.target.className;
            console.log('cardcoll: ', cardCol, id, event);
            if (cardCol === 'col0'){
                var arr = [];
                arr.push(event.target.id);
                event.dataTransfer.setData("text", arr);
                console.log('Dragging', arr);
                this.currCardCol = '0';
                return;
            }
            this.currCardCol = cardCol[cardCol.length - 1];
            this.prevCardCol = cardCol;

            this.updateTransferList(event, cardCol);


            // Credit: https://stackoverflow.com/questions/7107243/html5-dragging-and-dropping-multiple-elements-between-multiple-browser-windows/22020559
            var dragList = [];
            var dragImage = document.createElement('div');
            // dragImage.style.width = '20%';
            // dragImage.style.height = '67px';

            console.log(this.transferCards);
            var transferCards = this.transferCards;
            this.transferCards.forEach(function(elem, index){
                dragList.push(transferCards[index].id);

                // Credit: https://stackoverflow.com/questions/29131466/change-ghost-image-in-html5-drag-and-drop
                var temp = transferCards[index].cloneNode(true);
                temp.style.width = '44px';
                temp.style.height = '67px';
                // temp.style.position = "absolute"; 
                temp.style.display = 'flex'; 
                temp.style.backgroundColor = 'none';
                dragImage.appendChild(temp);
            });


            console.log("Dragging ", dragList);
            event.dataTransfer.setData("text", dragList);
            document.body.appendChild(dragImage);
            setTimeout(function() { dragImage.parentNode.removeChild(dragImage) });
            event.dataTransfer.setDragImage(dragImage, 0, 10);


            // event.dataTransfer.setData("text", event.target.id);
            
            // console.log('added data' + event.target.id);
            // console.log('target col: ' + this.currCardCol);

        },
        updateTransferList(event, col){
            console.log(event);
            var cardList = [].slice.call(document.getElementsByClassName(col));
            console.log(cardList);
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
            console.log('to be transferred: ');
            for (let card in transferCards){
                console.log(transferCards[card]);
                this.transferCards.push(transferCards[card]);
            }
            console.log('transferCards: ', this.transferCards);
        },
        handleDragEnd(event){
        },
        handleDragOver(event){
            event.preventDefault();
        },
        dropHandler(event){
            console.log("target id: " + event.target.id);
            var targetCol = event.target.id;
            var data = (event.dataTransfer.getData("text")).split(',');
            console.log('data is: ', data);

            var col = 'col' + targetCol[targetCol.length - 1];
            var cards = document.getElementsByClassName(col);
            if (cards.length == 0){
                this.targetCard = 'empty';
            }
            else {
                this.targetCard = cards[cards.length - 1].id;
            }

            if (this.cardMatch(data[0]) && this.colMatch(targetCol)){
                for (let i in data){
                    console.log('data[i]', data[i]);
                    event.preventDefault();
                    event.target.appendChild(document.getElementById(data[i]));
                    // this.moveCard(event, data);
                    this.moveTarget(event, data);
                    this.updateCards(event, data[i]);
                }
            }
            this.transferCards = [];
        },
        moveCard(event, card){
            var elem = document.getElementById(card);
            var top = elem.getBoundingClientRect().top;
            var left = elem.getBoundingClientRect().left;
            elem.style.transitionDuration = '0.5s';
            elem.style.transform = `translate(${left}px, ${top}px)`;
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
            console.log('Card: ', card);
            var old = event.target.removeChild(document.getElementById(card));
            var colName = "col" + this.targetCol;
            var colCards = document.getElementsByClassName(colName);
            var colCard = colCards[colCards.length - 1];
            console.log(colCard);
            
            // Place old card below the front card of the col
            if (colCard != undefined){
                // colCard.draggable = false;
                // this.targetCard = colCard.id;
                document.getElementById(colCard.id).insertAdjacentElement('afterend', old);
                console.log('colCard: '); console.log(colCard.id);
            }
            else {
                // this.targetCard = '';
                document.getElementById("target" + this.targetCol).insertAdjacentElement('beforebegin', old);
            }
            
            //colCard = colCards[colCards.length - 1];
            old.classList.add(colName);
            console.log(this.prevCardCol);
            old.classList.remove(this.prevCardCol);
            console.log(old.classList);

            console.log(old);
            console.log('style', old.style);
            if (this.currCardCol === '0'){
                console.log(old.style);
                old.style.zIndex = 'auto';
                old.style.width = '70%';
                old.style.position = '';
                old.style.transitionDuration = '';
                old.style.transform = '';
            }

            // Change disabled-ness of new front cards
            var prevFronts = document.getElementsByClassName(this.prevCardCol);
            console.log(prevFronts);
            var prevFront = prevFronts[prevFronts.length - 1];
            console.log('prevFront', prevFront);
            if (prevFront != undefined){
                prevFront.draggable = true;
                var card = this.findCard(prevFront.id);
                if (card != null){
                    console.log(card);
                    card.disabled = false;
                }
                // prevFront.setAttribute("src", "../../Downloads/download.gif");
            }
            
        },
        findCard(id){
            console.log(id);
            for (let i in this.cards){
                console.log(i, this.cards[i].name);
                if (this.cards[i].name === id){
                     console.log(this.cards[i].name);
                     return this.cards[i];
                }
            }
            return null;
        },
        cardMatch(data){
            // console.log('data: ' + data);
            // console.log('target card: ' + this.targetCard);
            if (this.targetCard === 'empty'){
                if (data.split('-')[0] == 13){
                    console.log('mAtch');
                    return true;
                }
                return false;
            }
            else {
                var targetNum = this.targetCard.split('-');
                var card = data.split('-')
                console.log(targetNum[0]);
                console.log(card[0]);
                if (targetNum[0] - card[0] != 1){
                     return false;
                }
                else if (targetNum[1] === 'spades' || targetNum[1] === 'clubs'){
                    if (card[1] === 'hearts' || card[1] === 'diamonds'){
                        console.log('Match')
                        return true;
                    }
                    return false;
                }
                else if (targetNum[1] === 'hearts' || targetNum[1] === 'diamonds'){
                    if (card[1] === 'spades' || card[1] === 'clubs'){
                        console.log('mAtch');
                        return true;
                    }
                    return false;
                }
            }
            return false;
        },
        colMatch(target){
            var targetCol = target[target.length - 1];
            console.log('target: ' + targetCol, 'card: ' + this.currCardCol);
            if (this.currCardCol == null || this.currCardCol == targetCol){
                return false;
            }
            this.targetCol = targetCol;
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
        this.remaining--;
        var card = this.shuffledCards[this.remaining];
        console.log(card);
        return card;
    },
    nextDealt(){
        var card = this.shuffledCards[this.remaining];
        console.log(card);
        return card;
    }
  }
}
</script>


<style scoped>
.drag{
    background-color: yellow;
    width: 75px;
    height: 75px;
}
.target{
    background-color:pink;
    width: 60px;
    height: 80px;
}

.targets .target{
    display: inline-block;
    margin-left: 10px;
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
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.col img{
    width: 70%;
}
.body{
    background-color: #facfed;
}
.dealt{
    position: relative;
}

.topDealt{
    position:absolute;
    z-index: 1;

}

.topDealt2{
    position:absolute;
    z-index: 2;

}



</style>