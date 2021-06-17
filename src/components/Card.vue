<template>
    <img :src="isFaceUp ? require('@/assets/' + imgSrc + '') : require('../assets/card.png')" @click="clickStatus(col, suit, number, name, isFaceUp, isClicked)"
    :style="isFaceUp ? currStyle : faceDownStyle" >
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
    isFaceUp: Boolean,
    imgSrc: String,
    name: String
  },
  data(){
      // Maybe put all the prop values in here so they can be mutable?
      // Is there a way for each component to have its attributes be referencable
      // so that I can pass in the component itself instead of having to pass in
      // all of its props one by one every time
      return{
          changeStyle: false,
          currStyle:{
              //boxShadow: 0+'px' + 0+'px' + 5+'px' + 'green',
               width:65+ '%',
               marginBottom: 0+ '%',
               marginLeft: 'none'
              //float:"left"   
          },
          faceDownStyle:{
              width: 90 + '%',
              marginLeft: 'none'
          },
          highlightStyle:{
            boxShadow: 0+'px' + ' ' + 0+'px' + ' ' + ' ' + 5+'px' + ' ' + 'green',
            width:65+ '%',
            //float:"left"
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
      clickStatus(col, suit, number, name, isFaceUp, isClicked){
          // const key = id;
          // console.log(id);
          // this.$parent.$refs[col].style.backgroundColor = 'red';
          this.setValues(col, isFaceUp, isClicked);
          // this.disClicked = !this.disClicked;
          // console.log('\n');
          this.$parent.updateInfo(suit, number, this.disFaceUp, this.disClicked);
          this.changeStyle = !this.changeStyle;
          // this.$props.isClicked = !this.$props.isClicked;
          this.$parent.clickStatus(col, suit, number, name, isFaceUp, this.disClicked);
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
    /*float:left;  */ 
    margin-left: 2%;
}
img:hover{
    box-shadow: 0px 0px 10px yellow;
}
p{
    float:left;
}
</style>