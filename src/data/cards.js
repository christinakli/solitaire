// Credit: https://www.improvemagic.com/all-playing-cards-names-with-pictures/
const cards = [
    // Red hearts
    {color: 'red', suit: 'heart', number: 1, name:"1heart", source: 'hearts/acehearts.png'},
    {color: 'red', suit: 'heart', number: 2, name:"2heart", source: 'hearts/2hearts.png'},
    {color: 'red', suit: 'heart', number: 3, name:"3heart", source: 'hearts/3hearts.png'},
    {color: 'red', suit: 'heart', number: 4, name:"4heart", source: 'hearts/4hearts.png'},
    {color: 'red', suit: 'heart', number: 5, name:"5heart", source: 'hearts/5hearts.png'},
    {color: 'red', suit: 'heart', number: 6, name:"6heart", source: 'hearts/6hearts.png'},
    {color: 'red', suit: 'heart', number: 7, name:"7heart", source: 'hearts/7hearts.png'},
    {color: 'red', suit: 'heart', number: 8, name:"8heart", source: 'hearts/8hearts.png'},
    {color: 'red', suit: 'heart', number: 9, name:"9heart", source: 'hearts/9hearts.png'},
    {color: 'red', suit: 'heart', number: 10, name:"10heart", source: 'hearts/10hearts.png'},
    {color: 'red', suit: 'heart', number: 11, name:"11heart", source: 'hearts/jhearts.png'},
    {color: 'red', suit: 'heart', number: 12, name:"12heart", source: 'hearts/qhearts.png'},
    {color: 'red', suit: 'heart', number: 13, name:"13heart", source: 'hearts/khearts.png'},
    
    // Red diamonds
    {color: 'red', suit: 'diamond', number: 1, name: "1diamond", source: 'diamonds/acediamonds.png'},
    {color: 'red', suit: 'diamond', number: 2, name: "2diamond", source: 'diamonds/2diamonds.png'},
    {color: 'red', suit: 'diamond', number: 3, name: "3diamond", source: 'diamonds/3diamonds.png'},
    {color: 'red', suit: 'diamond', number: 4, name: "4diamond", source: 'diamonds/4diamonds.png'},
    {color: 'red', suit: 'diamond', number: 5, name: "5diamond", source: 'diamonds/5diamonds.png'},
    {color: 'red', suit: 'diamond', number: 6, name: "6diamond", source: 'diamonds/6diamonds.png'},
    {color: 'red', suit: 'diamond', number: 7, name: "7diamond", source: 'diamonds/7diamonds.png'},
    {color: 'red', suit: 'diamond', number: 8, name: "8diamond", source: 'diamonds/8diamonds.png'},
    {color: 'red', suit: 'diamond', number: 9, name: "9diamond", source: 'diamonds/9diamonds.png'},
    {color: 'red', suit: 'diamond', number: 10, name: "10diamond", source: 'diamonds/10diamonds.png'},
    {color: 'red', suit: 'diamond', number: 11, name: "11diamond", source: 'diamonds/jdiamonds.png'},
    {color: 'red', suit: 'diamond', number: 12, name: "12diamond", source: 'diamonds/qdiamonds.png'},
    {color: 'red', suit: 'diamond', number: 13, name: "13diamond", source: 'diamonds/kdiamonds.png'},
    
    // Black clubs
    {color: 'black', suit: 'clubs', number: 1, name: "1clubs", source: 'clubs/aceclubs.png'},
    {color: 'black', suit: 'clubs', number: 2, name: "2clubs", source: 'clubs/2clubs.png'},
    {color: 'black', suit: 'clubs', number: 3, name: "3clubs", source: 'clubs/3clubs.png'},
    {color: 'black', suit: 'clubs', number: 4, name: "4clubs", source: 'clubs/4clubs.png'},
    {color: 'black', suit: 'clubs', number: 5, name: "5clubs", source: 'clubs/5clubs.png'},
    {color: 'black', suit: 'clubs', number: 6, name: "6clubs", source: 'clubs/6clubs.png'},
    {color: 'black', suit: 'clubs', number: 7, name: "7clubs", source: 'clubs/7clubs.png'},
    {color: 'black', suit: 'clubs', number: 8, name: "8clubs", source: 'clubs/8clubs.png'},
    {color: 'black', suit: 'clubs', number: 9, name: "9clubs", source: 'clubs/9clubs.png'},
    {color: 'black', suit: 'clubs', number: 10, name: "10clubs", source: 'clubs/10clubs.png'},
    {color: 'black', suit: 'clubs', number: 11, name: "11clubs", source: 'clubs/jclubs.png'},
    {color: 'black', suit: 'clubs', number: 12, name: "12clubs", source: 'clubs/kclubs.png'},
    {color: 'black', suit: 'clubs', number: 13, name: "13clubs", source: 'clubs/qclubs.png'},
    
    // Black spades
    {color: 'black', suit: 'spades', number: 1, name: "1spades", source: 'spades/acespades.png'},
    {color: 'black', suit: 'spades', number: 2, name: "2spades", source: 'spades/2spades.png'},
    {color: 'black', suit: 'spades', number: 3, name: "3spades", source: 'spades/3spades.png'},
    {color: 'black', suit: 'spades', number: 4, name: "4spades", source: 'spades/4spades.png'},
    {color: 'black', suit: 'spades', number: 5, name: "5spades", source: 'spades/5spades.png'},
    {color: 'black', suit: 'spades', number: 6, name: "6spades", source: 'spades/6spades.png'},
    {color: 'black', suit: 'spades', number: 7, name: "7spades", source: 'spades/7spades.png'},
    {color: 'black', suit: 'spades', number: 8, name: "8spades", source: 'spades/8spades.png'},
    {color: 'black', suit: 'spades', number: 9, name: "9spades", source: 'spades/9spades.png'},
    {color: 'black', suit: 'spades', number: 10, name: "10spades", source: 'spades/10spades.png'},
    {color: 'black', suit: 'spades', number: 11, name: "11spades", source: 'spades/jspades.png'},
    {color: 'black', suit: 'spades', number: 12, name: "12spades", source: 'spades/qspades.png'},
    {color: 'black', suit: 'spades', number: 13, name: "13spades", source: 'spades/kspades.png'}
    
    ]
    
    export default cards;