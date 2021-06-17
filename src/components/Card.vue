<template>
    <img src="../assets/card.png" @click="clickStatus(col, suit, number, isFaceUp, isClicked)"
     :style = highlightStyle>
     <!-- :style="(!disabledClick && (oneClicked || twoClicked) && disClicked) ? highlightStyle : null">
     -->
    <!-- <p>
        {{ score }}
    </p> -->
</template>


<script>
export default {
  name: 'Card',
  props: {
    // id: String,
    col: String,
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
              // backgroundColor: "#fffdb3",
              width:10 + '%',
              float:"left"   
          },
          // dcol: 0,
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
          if (this.$parent.moreThanTwoClicked){
              this.disClicked = false;
          }
          return this.$parent.moreThanTwoClicked;
      },
      disabledClick(){
          return this.$parent.disabledClicking;
      }
  },
  methods: {
      setValues(key, isFaceUp, isClicked){
          // this.dcol = col;
          this.disFaceUp = isFaceUp;
          // this.disClicked = !this.disClicked;
          console.log('isClicked in card: ' + this.disClicked);
      },
      clickStatus(col, suit, number, isFaceUp, isClicked){
          // const key = id;
          // console.log(id);
          // this.$parent.$refs[col].style.backgroundColor = 'red';
          this.setValues(col, isFaceUp, isClicked);
          // this.disClicked = !this.disClicked;
          // console.log('\n');
          this.$parent.updateInfo(suit, number, this.disFaceUp, this.disClicked);
          this.changeStyle = !this.changeStyle;
          // this.$props.isClicked = !this.$props.isClicked;
          this.$parent.clickStatus(col, suit, number, isFaceUp, this.disClicked);
          // console.log('isTwoClicked in Card: ' + this.$parent.isTwoClicked);
          // console.log('twoClicked: ' + this.twoClicked);
          // console.log('isOneClicked in Card: ' + this.$parent.isOneClicked);
          this.disClicked = !this.disClicked;
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