
<template>
<div>


<h1 :style="{textAlign: 'center'}"> solitaire </h1>

<div class="layout">
    <div class="col">
        <img :src="require('@/assets/' + this.currentDealt.source + '')"
        @click="changeCard">
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
        :src="require('@/assets/' + card.source + '')">

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
        :src="require('@/assets/' + card.source + '')">

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
        :src="require('@/assets/' + card.source + '')">

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
        :src="require('@/assets/' + card.source + '')">

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
        :src="require('@/assets/' + card.source + '')">

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
        :src="require('@/assets/' + card.source + '')">

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
            transferCards: []
        }
    },
    methods: {
        changeCard(){
            this.shuffledCards[51] = {color: 'red', suit: 'heart', number: 1, name:"1heart", source: 'src/assets/hearts/acehearts.png', disabled: true}
            console.log(this.shuffledCards[51]);
        },
        handleDragStart(event, id){
            var elem = document.getElementById(id);
            // elem.style.boxShadow = "0px 0px 10px blue";
            // console.log(event.target.className);

            var cardCol = event.target.className;
            this.currCardCol = cardCol[cardCol.length - 1];
            this.prevCardCol = cardCol;


            event.dataTransfer.setData("text", event.target.id);
            
            // console.log('added data' + event.target.id);
            // console.log('target col: ' + this.currCardCol);

            this.updateTransferList(event, cardCol);
        },
        updateTransferList(event, col){
            console.log(event);
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
            // console.log('to be transferred: ');
            for (let card in transferCards){
                // console.log(transferCards[card]);
                this.transferCards.push(transferCards[card]);
            }
        },
        handleDragEnd(event){
        },
        handleDragOver(event){
            event.preventDefault();
        },
        dropHandler(event){
            console.log("target id: " + event.target.id);
            var targetCol = event.target.id;
            var data = event.dataTransfer.getData("text");
            console.log('data is: ' + data);

            var col = 'col' + targetCol[targetCol.length - 1];
            var cards = document.getElementsByClassName(col);
            if (cards.length == 0){
                this.targetCard = 'empty';
            }
            else {
                this.targetCard = cards[cards.length - 1].id;
            }

            if (this.cardMatch(data) && this.colMatch(targetCol)){
                event.preventDefault();
                event.target.appendChild(document.getElementById(data));
                // this.moveCard(event, data);
                this.moveTarget(event, data);
                this.updateCards(event, data);
            }
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
            console.log('(Left, top): ', left, top);

            elem.style.transitionDuration = '0.5s';
            elem.style.backgroundColor = 'yellow';
            // elem.style.transform = 'translate(0px, 67px)';
            
        },
        updateCards(event, card){
            // Remove moved card from target
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
                for (let i in this.transferCards){
                    //document.getElementById(colCard.id).appendChild(
                    //    document.getElementById(this.transferCards[i].id));
                }
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

            // Change disabled-ness of new front cards
            var prevFronts = document.getElementsByClassName(this.prevCardCol);
            console.log(prevFronts);
            var prevFront = prevFronts[prevFronts.length - 1];
            console.log(prevFront);
            if (prevFront != undefined){
                prevFront.draggable = true;
            }
            
        },
        cardMatch(data){
            console.log('data: ' + data);
            console.log('target card: ' + this.targetCard);
            if (this.targetCard === 'empty'){
                if (data.split('-')[0] == 13){
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
                    if (card[1] === 'heart' || card[1] === 'diamond'){
                        console.log('Match')
                        return true;
                    }
                    return false;
                }
                else if (targetNum[1] === 'heart' || targetNum[1] === 'diamond'){
                    if (card[1] === 'spades' || card[1] === 'clubs'){
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





        changeIfTarget(value, name){
            var elem = document.getElementById(name);
            // elem.style.transform = 'none';
            if (value){
                console.log('On target');
            }
            else{
                console.log('Left target');
            }
            this.onTarget = value;
        },
        updateClicked(name){
            console.log(name + ' clicked');
            this.currentClicked = name;

            console.log(this.currentClicked);
            var elem = document.getElementById(name);
            console.log(elem);
            // elem.style.backgroundColor = "black";

            var x = Math.round(document.getElementById(name).getBoundingClientRect().left);
            var y = Math.round(document.getElementById(name).getBoundingClientRect().top);
            console.log('(x, y): ', x, y)

        },
        onDragStart(event, name){
            // console.log(event);
            var x = Math.round(document.getElementById(name).getBoundingClientRect().left);
            this.returnX = x;
            var y = Math.round(document.getElementById(name).getBoundingClientRect().top);
            this.returnY = y;

            console.log('Starting x & y: ', this.returnX, this.returnY);
            //console.log('Style at drag start: ' + JSON.stringify(document.getElementById(name).style));
        },
        onDragEnd(event, name){
            // console.log(event, name);
            var top = ((event.args.position.top));
            var left = ((event.args.position.left));
            console.log('(Left, top): ', left, top);

            var elem = document.getElementById(name);
            // console.log(elem);

            if (this.onTarget){
            // elem.style.top = `${top}px`;
            // elem.style.left = `${left}px`;
                // elem.style.transitionDuration = '0.5s';
                // elem.style.transform = 'translate(0px, 0px)';

                // elem.style.backgroundColor = "blue";
                // this.onTarget = false;
                // console.log(this.$refs[name].dropTarget);
                // this.clear(name);
                // this.$refs[name][0]._props.revert = false;

                // this.$refs[name][0].$set(this, this.$refs[name][0].revert, false);
                // console.log(this.$refs[name][0]);
            }
            else {
                console.log('Not on target, done dragging');
                top = -top;
                left =  -left;
                console.log(left, top);

                var id = this.$refs[name][0].id;
                console.log(this.$refs[name][0]);

                var dnd = document.getElementById(id);
                console.log(elem);
                // dnd.style.transitionDuration = '0.5s';
                // dnd.style.transform = `translate(${left}px, ${top}px)`;

                elem.style.transitionDuration = '0.5s';
                elem.style.transform = `translate(${left}px, ${top}px)`;

                // var all = document.getElementsByClassName('jqx-draggable');
                // for (var i = 0; i < all.length; i++) {
                //    // all[i].style.color = 'red';
                //    console.log(all[i]);
                //    // all[i].style.transform = `translate(${left}px, ${top}px)`;
                // }

                

                // console.log(this.$refs[name].dropTarget);

                // this.onTarget = true;

                // elem.style.cssText = `transform: translate(${left}px, ${top}px)`;
            }
            // this.clear(name);

        },
        clear(name){
            var elem = document.getElementById(name);
            elem.style.transform = 'none';
            elem.style.width = '75px';
            elem.style.height = '75px';
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
        var card = this.shuffledCards.slice(28,52).pop();
        // console.log(card);
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


</style>