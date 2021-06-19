
<template>
<div>

<h1 :style="{textAlign: 'center'}"> solitaire </h1>

<div class="layout">
    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(0,1)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(1,3)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(3,6)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(6,10)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(10,15)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(15,21)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

    <div class="col">
    <DragDrop v-for="card in shuffledCards.slice(21,28)"  :key="card.name"
      :dropTarget="'.target'" 
      @dropTargetEnter="changeIfTarget(true)" @dropTargetLeave="changeIfTarget(false)" 
      @dragEnd="onDragEnd($event, card.name)"
      @dragStart="onDragStart($event, card.name)">
        <img class="drag" :id="card.name" :ref="card.name"
        @click="updateClicked(card.name)"
        :src="require('@/assets/' + card.source + '')">
    </DragDrop>
    </div>

   


    <br>
    


</div>

   <div class="target">
        Target
    </div>
    <div class="target2">
        Target
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
            currentClicked: '',
            returnX: null,
            returnY: null,
            onTarget: false
        }
    },
    methods: {
        changeIfTarget(value){
            if (value){
                console.log('On target');
            }
            else{
                console.log('Left target');
            }
            this.onTarget = value;
        },
        enterTarget(name){
            console.log('On target');
            this.onTarget = true;
        },
        leaveTarget(name){
            console.log('Left target');
            this.onTarget = false;
        },
        updateClicked(name){
            console.log(name + ' clicked');
            this.currentClicked = name;

            console.log(this.currentClicked);
            var elem = document.getElementById(name);
            elem.style.backgroundColor = "black";

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
        },
        onDragEnd(event, name){
            // console.log(event, name);
            var top = ((event.args.position.top));
            var left = ((event.args.position.left));
            console.log('(Left, top): ', left, top);

            var elem = document.getElementById(name);
            console.log(elem);

            if (this.onTarget){
            // elem.style.top = `${top}px`;
            // elem.style.left = `${left}px`;
                elem.style.transitionDuration = '0.5s';
                elem.style.transform = 'translate(0px, 20px)';

                // elem.style.backgroundColor = "blue";
                this.onTarget = false;
                console.log(this.$refs[name].dropTarget);
            }
            else {
                top = -top;
                left =  -left;
                console.log(left, top);
                elem.style.transitionDuration = '0.5s';
                elem.style.transform = `translate(${left}px, ${top}px)`;

                console.log(this.$refs[name].dropTarget);

                // this.onTarget = true;

                // elem.style.backgroundColor = "pink";
            }
        
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

<style src='./assets/styles/jqwidgets/jqx.base.css'></style>
<style scoped>
.drag{
    background-color: yellow;
    width: 75px;
    height: 75px;
}
.target{
    background-color:pink;
    width: 150px;
    height: 150px;
}

.target2{
    background-color:orange;
    margin-top: 20px;
    width: 150px;
    height: 150px;
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


</style>