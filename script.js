const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["C", "D", "H", "S"];
let deck = [];
let player = [];
let nextCard = [];
const insideButton = document.querySelector(".inBetween");
const outsideButton = document.querySelector(".outside");
const dealCardsButton = document.querySelector(".dealer");
const playAgainButton = document.querySelector(".reset");

let laugh = document.querySelector(".laugh");
let sentry = document.querySelector(".sentry");
let ghost = document.querySelector(".ghost");

let playerGuess;


let playerValue1
let playerSuit1
let playerValue2
let playerSuit2
let cardThree
let cardThreeValue
let cardThreeImg

let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");

let winner = document.querySelector(".winner");
let loser = document.querySelector(".loser");
let tie = document.querySelector(".tie");



function buildDeck(arr1, arr2) {
	for (let i =0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let card = { num: arr1[i], suit: arr2[j], value: i+2, imgSrc: `./images/${arr1[i]}${arr2[j]}.jpg`}
			deck.push(card);
		}
	}
	return deck;
};

 dealCardsButton.addEventListener("click", ()=>{
	buildDeck(values, suits);
	dealCardsToPlayer();
})

 insideButton.addEventListener("click", ()=>{
 	playerGuess = 'inBetween'
 	checkGuess();
 	let cardThreeImgDiv = document.createElement("img");
 	cardThreeImgDiv.src = cardThreeImg	
	card3.appendChild(cardThreeImgDiv);
	
 })
 outsideButton.addEventListener("click", ()=>{
 	playerGuess = 'outside'
 	checkGuess();
 	let cardThreeImgDiv = document.createElement("img");
 	cardThreeImgDiv.src = cardThreeImg	
	card3.appendChild(cardThreeImgDiv);
	
 })

 playAgainButton.addEventListener("click", ()=>{
 	location.reload();
 	
 })
 
function checkGuess() {
	
	if (playerGuess === "inBetween") {
		if (playerValue1 < playerValue2) {
			

			if (playerValue2 > cardThreeValue && cardThreeValue > playerValue1){
				winner.innerHTML = "You Win This Time...";
				laugh.play();
				player = [];
				deck = [];
			} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2) {
				tie.innerHTML = "Play Again";
				ghost.play();
			}
			else {
				loser.innerHTML = "Your Soul Is Mine!";
				sentry.play();
				player = [];
				deck = []
				
			}
		}
		else if (playerValue1 < playerValue2) {
			
				if (playerValue1 > cardThreeValue  && cardThreeValue > playerValue2 ){
				winner.innerHTML = "You Win This Time...";
				laugh.play();
				player = [];
				deck = []
				} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2) {
				tie.innerHTML = "Play Again";
				ghost.play();
				player = [];
				deck = []
				
		}
			else{
				loser.innerHTML = "Your Soul Is Mine!";
				sentry.play();
				player = [];
				deck = []
				
			}
		}
		
	}

	else if (playerGuess === "outside") {
			if(playerValue2 > playerValue1) {
			if (cardThreeValue > playerValue1  &&  playerValue2 < cardThreeValue){
				winner.innerHTML = 'You Win This Time...';
				laugh.play();
				player = [];
				deck = [];
			} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2){
				tie.innerHTML = "Play Again";
				ghost.play();
			}
			else {
				loser.innerHTML = "Your Soul Is Mine!";
				sentry.play();
				player = [];
				deck = [];
				
			}
		}
		else if (playerValue1 > playerValue2) {
				if (cardThreeValue < playerValue1  &&  playerValue2 > cardThreeValue){
				winner.innerHTML = 'You Win This Time';
				laugh.play();
				player = [];
				deck = [];
			} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2){
				tie.innerHTML = "Play Again";
				ghost.play();
				
			}	else{
				loser.innerHTML = "Your Soul Is Mine!";
				sentry.play();
				player = [];
				deck = [];
				console.log(deck.length);
				console.log(player);

			}
		}
		else if (playerValue1 == playerValue2) {
			tie.innerHTML = "Play Again";
			ghost.play();
			player = [];
			deck = [];
			console.log(deck.length);
			console.log(player);
		}
		
	}
	
};


function dealCardsToPlayer() {
	let num1 = Math.floor(Math.random()*deck.length);
	let num2 = Math.floor(Math.random()*deck.length);
	let num3 = Math.floor(Math.random()*deck.length);
		
	player.push(deck.splice(num1, 1));
	player.push(deck.splice(num2, 1));
	nextCard.push(deck.splice(num3, 1));
	playerValue1 = player[0][0].value
	playerSuit1 = player[0][0].suit
	playerValue1Img = player[0][0].imgSrc;
	playerValue2 = player[1][0].value
	playerSuit2 = player[1][0].suit
	playerValue2Img = player[1][0].imgSrc;
	cardThree = `${nextCard[0][0].num} of ${nextCard[0][0].suit}`;
	cardThreeValue = nextCard[0][0].value
	cardThreeImg = nextCard[0][0].imgSrc
	

	showCards(playerValue1, playerSuit1, playerValue2, playerSuit2)
	
};

function showCards(val1, suit1, val2, suit2, val3, suit3) {
	console.log(`player has a ${val1} of ${suit1}`);
	console.log(`player has a ${val2} of ${suit2}`);
	
	let cardOne = document.createElement("img");
	cardOne.src = player[0][0].imgSrc;
	card1.appendChild(cardOne);
	console.log(card1);
	let cardTwo = document.createElement("img");
	cardTwo.src = player[1][0].imgSrc;	
	card2.appendChild(cardTwo);
	console.log(card2);
};





