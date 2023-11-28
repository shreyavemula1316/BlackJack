
let cards = [];
let sum = 0;
let hasBlackJack = false;
let Alive = false;
let sumEl = document.getElementById('sum-el');
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');

let player={
    name : "Per",
    chips : 145
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    Alive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;
    renderGame();
}

function getRandomCard(){
   let randomNumber =  Math.floor(Math.random()*13)+1;
   if(randomNumber === 1){
    return 11;
   }
   else if(randomNumber > 10){
    return 10;
   }
   else{
    return randomNumber;
   }
}


function renderGame(){
    cardsEl.textContent = "Cards: " ;
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <=  20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "whooo! You've got BlackJack!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game";
        Alive = false;
    }

    messageEl.textContent = message;

}

function newCard(){
    if(Alive == true && hasBlackJack == false){
    
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        cardsEl.textContent
        renderGame();
        
    }
}