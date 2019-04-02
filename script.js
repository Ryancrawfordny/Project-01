const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let num1
let num2
let num3
let player = [];
let nextCard = [];
const insideButton = document.querySelector(".inBetween");
const outsideButton = document.querySelector(".outside");
let playerGuess

 insideButton.addEventListener("click", ()=>{
 	playerGuess = 'inBetween'
 	checkGuess();
 })
 outsideButton.addEventListener("click", ()=> {
 	playerGuess = 'outside'
 	checkGuess();
 })
 



function buildDeck(arr1, arr2) {
	for (let i =0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let card = { num: arr1[i], suit: arr2[j], value: i+2}
			deck.push(card);
		}
	}
	
	return deck;
};

function checkGuess() {
	buildDeck(values, suits);
dealCardsToPlayer();
showCards();
	if (playerGuess === "inBetween") {
		if (num1 < num2) {
			if (num3 > num1 && num3 < num2){
				console.log("Winner, Winner, Chicken dinner!");
			}
			else {
				console.log("Gimme your money!");
			}
		}
		else if (num2 < num1) {
				if (num3 > num2 && num3 < num1){
					console.log("Winner, Winner, Chicken dinner!");
				}
			else{
				console.log("Gimme your money!");
			}
		}
		else{

			console.log("Deal again!");
		}
	}

	else {
		if(num2 > num1) {
			if (num3 < num1 && num3 > num2){
				console.log("Winner, Winner, Chicken dinner!");
			}
			else {
				console.log("Gimme your money!");
			}
		}
		else if (num1 > num2) {
			if (num3 > num1 && num3 <num2){
				console.log("Winner, Winner, Chicken dinner!");
			}
		}
		else {
			console.log("Deal again!");
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

	
};

function showCards() {
	console.log(`player has a ${player[0][0].num} of ${player[0][0].suit}`);
	console.log(`player has a ${player[1][0].num} of ${player[1][0].suit}`);

};


