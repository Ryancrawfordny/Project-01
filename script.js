const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["C", "D", "H", "S"];
let deck = [];
let player = [];
let nextCard = [];
const insideButton = document.querySelector(".inBetween");
const outsideButton = document.querySelector(".outside");
const dealCardsButton = document.querySelector(".dealer");
let playerGuess;


let playerValue1
let playerSuit1
let playerValue2
let playerSuit2
let cardThree
let cardThreeValue

let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");

function buildDeck(arr1, arr2) {
	for (let i =0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let card = { num: arr1[i], suit: arr2[j], value: i+2}
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
 	let cardThree = document.createElement("img");
	cardThree.src = "./images/2H.jpg";	
	card2.appendChild(cardThree);
	console.log(card3)
 })
 outsideButton.addEventListener("click", ()=> {
 	playerGuess = 'outside'
 	checkGuess();
 })
 
function checkGuess() {
	
	if (playerGuess === "inBetween") {
		console.log('in inBetween')
		console.log(playerValue1, '1');
		console.log(playerValue2, '2');
		console.log(cardThree, '3rd card');
		if (playerValue1 < playerValue2) {
			console.log (` in playerValue2 > playerValue1`)

			if (playerValue2 > cardThreeValue && cardThreeValue > playerValue1){
				console.log("Winner, Winner, Vegan Dinner!");
				player = [];
				deck = [];
				console.log(deck.length);
				console.log(player);
			} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2) {
				console.log("Deal again")
			}
			else {
				console.log('1 card < 2 card');
				console.log("Gimme your money!");
				player = [];
				deck = []
				console.log(deck.length);
				console.log(player);
			}
		}
		else if (playerValue2 < playerValue1) {
			console.log (` in playerValue2 < playerValue1`)
				if (playerValue1 > cardThreeValue  && cardThreeValue > playerValue2 ){
					console.log("Winner, Winner, Vegan Dinner!");
				player = [];
				deck = []
				console.log(deck.length);
				console.log(player);
				} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2) {
				console.log("Deal Again!");
				player = [];
				deck = []
				console.log(deck.length);
				console.log(player);
		}
			else{
				console.log('2 card < 1 card');
				console.log("Gimme Your Money!");
				player = [];
				deck = []
				console.log(deck.length);
				console.log(player);
			}
		}
		
	}

	else if (playerGuess === "outside") {
			
			console.log(playerValue1, '1');
			console.log(playerValue2, '2');
			console.log(cardThree, '3rd card');
			if(playerValue2 > playerValue1) {
			if (cardThreeValue > playerValue1  &&  playerValue2 < cardThreeValue){
				console.log(playerValue1, playerValue2, cardThreeValue);
				console.log("Winner, Winner, Vegan Dinner!");
				player = [];
				deck = [];
				console.log(deck.length);
				console.log(player);
			} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2){
				console.log('Deal Again')
			}
			else {
				console.log(playerValue1, playerValue2, cardThreeValue);
				console.log("Gimme your money!");
				player = [];
				deck = [];
				console.log(deck.length);
				console.log(player);
			}
		}
		else if (playerValue1 > playerValue2) {
				if (cardThreeValue > playerValue1  &&  playerValue2 < cardThreeValue){
				console.log(playerValue1, playerValue2, cardThreeValue);
				console.log("Winner, Winner, Vegan Dinner!");
				player = [];
				deck = [];
				console.log(deck.length);
				console.log(player);
			} else if (cardThreeValue == playerValue1 || cardThreeValue == playerValue2){
				
			}	else{
				console.log(playerValue1, playerValue2, cardThreeValue);
				console.log("Gimme Your Money!");
				player = [];
				deck = [];
				console.log(deck.length);
				console.log(player);

			}
		}
		else if (playerValue1 == playerValue2) {
			console.log(playerValue1, playerValue2, cardThreeValue);
			console.log("Deal Again!");
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
	playerValue2 = player[1][0].value
	playerSuit2 = player[1][0].suit
	cardThree = `${nextCard[0][0].num} of ${nextCard[0][0].suit}`;
	cardThreeValue = nextCard[0][0].value
	console.log(cardThreeValue)

	showCards(playerValue1, playerSuit1, playerValue2, playerSuit2, cardThree)
	
};

function showCards(val1, suit1, val2, suit2) {
	console.log(`player has a ${val1} of ${suit1}`);
	console.log(`player has a ${val2} of ${suit2}`);
	let cardOne = document.createElement("img");
	cardOne.src = "./images/2C.jpg";
	card1.appendChild(cardOne);
	console.log(card1);
	let cardTwo = document.createElement("img");
	cardTwo.src = "./images/2D.jpg";	
	card2.appendChild(cardTwo);
	console.log(card2);
};



