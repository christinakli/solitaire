// Credit: https://www.improvemagic.com/all-playing-cards-names-with-pictures/
const cards = [
    // Red hearts
    {color: 'red', suit: 'heart', number: 1, name:"1heart", source: 'hearts/acehearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 2, name:"2heart", source: 'hearts/2hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 3, name:"3heart", source: 'hearts/3hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 4, name:"4heart", source: 'hearts/4hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 5, name:"5heart", source: 'hearts/5hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 6, name:"6heart", source: 'hearts/6hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 7, name:"7heart", source: 'hearts/7hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 8, name:"8heart", source: 'hearts/8hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 9, name:"9heart", source: 'hearts/9hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 10, name:"10heart", source: 'hearts/10hearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 11, name:"11heart", source: 'hearts/jhearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 12, name:"12heart", source: 'hearts/qhearts.png', disabled: true},
    {color: 'red', suit: 'heart', number: 13, name:"13heart", source: 'hearts/khearts.png', disabled: true},
    
    // Red diamonds
    {color: 'red', suit: 'diamond', number: 1, name: "1diamond", source: 'diamonds/acediamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 2, name: "2diamond", source: 'diamonds/2diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 3, name: "3diamond", source: 'diamonds/3diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 4, name: "4diamond", source: 'diamonds/4diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 5, name: "5diamond", source: 'diamonds/5diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 6, name: "6diamond", source: 'diamonds/6diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 7, name: "7diamond", source: 'diamonds/7diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 8, name: "8diamond", source: 'diamonds/8diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 9, name: "9diamond", source: 'diamonds/9diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 10, name: "10diamond", source: 'diamonds/10diamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 11, name: "11diamond", source: 'diamonds/jdiamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 12, name: "12diamond", source: 'diamonds/qdiamonds.png', disabled: true},
    {color: 'red', suit: 'diamond', number: 13, name: "13diamond", source: 'diamonds/kdiamonds.png', disabled: true},
    
    // Black clubs
    {color: 'black', suit: 'clubs', number: 1, name: "1clubs", source: 'clubs/aceclubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 2, name: "2clubs", source: 'clubs/2clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 3, name: "3clubs", source: 'clubs/3clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 4, name: "4clubs", source: 'clubs/4clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 5, name: "5clubs", source: 'clubs/5clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 6, name: "6clubs", source: 'clubs/6clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 7, name: "7clubs", source: 'clubs/7clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 8, name: "8clubs", source: 'clubs/8clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 9, name: "9clubs", source: 'clubs/9clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 10, name: "10clubs", source: 'clubs/10clubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 11, name: "11clubs", source: 'clubs/jclubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 12, name: "12clubs", source: 'clubs/kclubs.png', disabled: true},
    {color: 'black', suit: 'clubs', number: 13, name: "13clubs", source: 'clubs/qclubs.png', disabled: true},
    
    // Black spades
    {color: 'black', suit: 'spades', number: 1, name: "1spades", source: 'spades/acespades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 2, name: "2spades", source: 'spades/2spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 3, name: "3spades", source: 'spades/3spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 4, name: "4spades", source: 'spades/4spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 5, name: "5spades", source: 'spades/5spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 6, name: "6spades", source: 'spades/6spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 7, name: "7spades", source: 'spades/7spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 8, name: "8spades", source: 'spades/8spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 9, name: "9spades", source: 'spades/9spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 10, name: "10spades", source: 'spades/10spades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 11, name: "11spades", source: 'spades/jspades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 12, name: "12spades", source: 'spades/qspades.png', disabled: true},
    {color: 'black', suit: 'spades', number: 13, name: "13spades", source: 'spades/kspades.png', disabled: true}
    
    ]
    
    export default cards;