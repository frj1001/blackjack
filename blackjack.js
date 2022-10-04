
var cards = [] 
var sum = 0
var hasBlackjack = false
var isAlive = false
var message = ""
var messageEl = document.getElementById('message-el')
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")
var player = {
    name: "Farhaj",
    chips: 145
}

var playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips

function getRandomCard(){
    var randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    } 
}

function startGame(){
    isAlive = true
    var firstCard = getRandomCard() 
    var secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(var i=0; i<cards.length; i++){
        cardsEl.textContent += " "+cards[i]
    }
    sumEl.textContent = "Sum: "+ sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }else if(sum===21){
        message = "You got a Blackjack!"
        hasBlackjack = true
    }else {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
    
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
        console.log("Drawing a new card from the deck")
        var ncard = getRandomCard()
        sum += ncard
        cards.push(ncard)
        renderGame()
    }
}

