<template>
    <img src="../assets/transparent-card.png" 
    @click="addCardToDeck(topCard)"
    :style="clicked ? { left:x+'%', top:y+'%', backgroundColor:'yellow' } : { left:x+'%', top:y+'%' }">
    <!-- <p> {{ x }}, {{ y }} </p>
     v-bind:style="{ left:x+'%', top:y+'%' }">
     -->
   
</template>


<script>
export default {
    name: 'Deck',
    props: {
        x: Number,
        y: Number,
        topCard: String
    },
    data (){
        return {
            clicked: false
        }
    },
    methods: {
        deckMatch(deckCard, clickedCard){
            if (true){
                this.$parent.moveCard(clickedCard, deckCard);
            }
        },
        addCardToDeck(top){
            this.clicked = true;
            if (!this.$parent.isOneClicked){
                console.log('No other card clicked');
                this.clicked = false;
                return;
            }
            else {
                const clickedSuit = this.$parent.currClickedSuit;
                // Actually should not be suit, should be key/ref
                deckMatch(top, clickedSuit);
            }
        }
    }
}
</script>


<style scoped>
img{
    width:10%;
    position:absolute;
    /* float:right; */
}
</style>