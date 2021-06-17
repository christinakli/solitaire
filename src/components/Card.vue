<template>
    <img src="../assets/card.png" @click="checkMove(col, suit, color)"
     :style="(changeStyle && oneClicked) ? highlightStyle : null">
    <!-- <p>
        {{ score }}
    </p> -->
</template>


<script>
export default {
  name: 'Card',
  props: {
    col: Number,
    suit: Number,
    color: String
  },
  data(){
      return{
          changeStyle: false,
          highlightStyle:{
              backgroundColor: "#fffdb3",
              width:10 + '%',
              float:"left"   
          }
      }
  },
  computed: {
      twoClicked(){
          return this.$parent.isTwoClicked;
      },
      oneClicked(){
          return this.$parent.isOneClicked;
      }
  },
  methods: {
      checkMove(col, suit, color){
          this.changeStyle = !this.changeStyle;
          this.$parent.checkMove(col, suit, color);
          console.log('isTwoClicked in Card: ' + this.$parent.isTwoClicked);
          console.log('twoClicked: ' + this.twoClicked);
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