<template>
    <img src="../assets/transparent-card.png" 
    v-bind:style="{ left:x+'%', top:y+'%' }">
    <!-- <p> {{ x }}, {{ y }} </p> -->
   
</template>


<script>
export default {
    name: 'Deck',
    props: {
        x: Number,
        y: Number
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