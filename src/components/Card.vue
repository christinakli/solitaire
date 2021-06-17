<template>
    <img src="../assets/card.png" @click="checkMove(col, suit, number, isFaceUp, isClicked)"
     :style="(!moreThanTwoClicked && (twoClicked || oneClicked) && disClicked) ? highlightStyle : null">
    <!-- <p>
        {{ score }}
    </p> -->
</template>


<script>
export default {
  name: 'Card',
  props: {
    col: Number,
    number: Number,
    suit: String,
    isClicked: Boolean,
    isFaceUp: Boolean
  },
  data(){
      // Maybe put all the prop values in here so they can be mutable?
      // Is there a way for each component to have its attributes be referencable
      // so that I can pass in the component itself instead of having to pass in
      // all of its props one by one every time
      return{
          changeStyle: false,
          highlightStyle:{
              backgroundColor: "#fffdb3",
              width:10 + '%',
              float:"left"   
          },
          dcol: 0,
          disClicked: false,
          disFaceUp: false
      }
  },
  computed: {
      twoClicked(){
          return this.$parent.isTwoClicked;
      },
      oneClicked(){
          return this.$parent.isOneClicked;
      },
      moreThanTwoClicked(){
          return this.$parent.moreThanTwoClicked;
      }
  },
  methods: {
      setValues(col, isFaceUp, isClicked){
          this.dcol = col;
          this.disFaceUp = isFaceUp;
          this.disClicked = !this.disClicked;
      },
      checkMove(col, suit, number, isFaceUp, isClicked){
          this.setValues(col, isFaceUp, isClicked);
          // this.disClicked = !this.disClicked;
          console.log('\n');
          this.$parent.updateInfo(suit, number, this.disFaceUp, this.disClicked);
          this.changeStyle = !this.changeStyle;
          // this.$props.isClicked = !this.$props.isClicked;
          this.$parent.checkMove(col, suit, number, isFaceUp, isClicked);
          console.log('isTwoClicked in Card: ' + this.$parent.isTwoClicked);
          // console.log('twoClicked: ' + this.twoClicked);
          console.log('isOneClicked in Card: ' + this.$parent.isOneClicked);
      }
  }
}
</script>


<style scoped>
img{
    width:10%;
    float:left;   
}
img:hover{
    background-color:yellow;
}
p{
    float:left;
}
</style>