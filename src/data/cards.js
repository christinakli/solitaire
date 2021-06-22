// Credit: https://www.improvemagic.com/all-playing-cards-names-with-pictures/
const cards = [
    // Red hearts
    {color: 'red', suit: 'heart', number: 1, name:"1-heart", source: 'hearts/acehearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 2, name:"2-heart", source: 'hearts/2hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 3, name:"3-heart", source: 'hearts/3hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 4, name:"4-heart", source: 'hearts/4hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 5, name:"5-heart", source: 'hearts/5hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 6, name:"6-heart", source: 'hearts/6hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 7, name:"7-heart", source: 'hearts/7hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 8, name:"8-heart", source: 'hearts/8hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 9, name:"9-heart", source: 'hearts/9hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 10, name:"10-heart", source: 'hearts/10hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 11, name:"11-heart", source: 'hearts/jhearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 12, name:"12-heart", source: 'hearts/qhearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 13, name:"13-heart", source: 'hearts/khearts.png', disabled: true},
    
    // Red diamonds
    {color: 'red', suit: 'diamond', number: 1, name: "1-diamond", source: 'diamonds/acediamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 2, name: "2-diamond", source: 'diamonds/2diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 3, name: "3-diamond", source: 'diamonds/3diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 4, name: "4-diamond", source: 'diamonds/4diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 5, name: "5-diamond", source: 'diamonds/5diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 6, name: "6-diamond", source: 'diamonds/6diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 7, name: "7-diamond", source: 'diamonds/7diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 8, name: "8-diamond", source: 'diamonds/8diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 9, name: "9-diamond", source: 'diamonds/9diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 10, name: "10-diamond", source: 'diamonds/10diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 11, name: "11-diamond", source: 'diamonds/jdiamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 12, name: "12-diamond", source: 'diamonds/qdiamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 13, name: "13-diamond", source: 'diamonds/kdiamonds.png', disabled: true},
    
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