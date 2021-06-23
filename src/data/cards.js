// Credit: https://www.improvemagic.com/all-playing-cards-names-with-pictures/
const cards = [
    // Red hearts
    {color: 'red', suit: 'heart', number: 1, name:"1-hearts", source: 'hearts/1hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 2, name:"2-hearts", source: 'hearts/2hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 3, name:"3-hearts", source: 'hearts/3hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 4, name:"4-hearts", source: 'hearts/4hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 5, name:"5-hearts", source: 'hearts/5hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 6, name:"6-hearts", source: 'hearts/6hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 7, name:"7-hearts", source: 'hearts/7hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 8, name:"8-hearts", source: 'hearts/8hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 9, name:"9-hearts", source: 'hearts/9hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 10, name:"10-hearts", source: 'hearts/10hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 11, name:"11-hearts", source: 'hearts/11hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 12, name:"12-hearts", source: 'hearts/12hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 13, name:"13-hearts", source: 'hearts/13hearts.png', disabled: true},
    
    // Red diamonds
    {color: 'red', suit: 'diamond', number: 1, name: "1-diamonds", source: 'diamonds/1diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 2, name: "2-diamonds", source: 'diamonds/2diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 3, name: "3-diamonds", source: 'diamonds/3diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 4, name: "4-diamonds", source: 'diamonds/4diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 5, name: "5-diamonds", source: 'diamonds/5diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 6, name: "6-diamonds", source: 'diamonds/6diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 7, name: "7-diamonds", source: 'diamonds/7diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 8, name: "8-diamonds", source: 'diamonds/8diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 9, name: "9-diamonds", source: 'diamonds/9diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 10, name: "10-diamonds", source: 'diamonds/10diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 11, name: "11-diamonds", source: 'diamonds/11diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 12, name: "12-diamonds", source: 'diamonds/12diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 13, name: "13-diamonds", source: 'diamonds/13diamonds.png', disabled: true},
    
    // Black clubs
    {color: 'black', suit: 'clubs', number: 1, name: "1-clubs", source: 'clubs/aceclubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 2, name: "2-clubs", source: 'clubs/2clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 3, name: "3-clubs", source: 'clubs/3clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 4, name: "4-clubs", source: 'clubs/4clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 5, name: "5-clubs", source: 'clubs/5clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 6, name: "6-clubs", source: 'clubs/6clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 7, name: "7-clubs", source: 'clubs/7clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 8, name: "8-clubs", source: 'clubs/8clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 9, name: "9-clubs", source: 'clubs/9clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 10, name: "10-clubs", source: 'clubs/10clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 11, name: "11-clubs", source: 'clubs/jclubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 12, name: "12-clubs", source: 'clubs/qclubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 13, name: "13-clubs", source: 'clubs/kclubs.png', disabled: true},
    
    // Black spades
    {color: 'black', suit: 'spades', number: 1, name: "1-spades", source: 'spades/acespades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 2, name: "2-spades", source: 'spades/2spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 3, name: "3-spades", source: 'spades/3spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 4, name: "4-spades", source: 'spades/4spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 5, name: "5-spades", source: 'spades/5spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 6, name: "6-spades", source: 'spades/6spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 7, name: "7-spades", source: 'spades/7spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 8, name: "8-spades", source: 'spades/8spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 9, name: "9-spades", source: 'spades/9spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 10, name: "10-spades", source: 'spades/10spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 11, name: "11-spades", source: 'spades/jspades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 12, name: "12-spades", source: 'spades/qspades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 13, name: "13-spades", source: 'spades/kspades.png', disabled: true}
    
    ]
    
    export default cards;