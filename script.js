const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player = [];
let nextCard = [];
const insideButton = document.querySelector(".inBetween");
const outsideButton = document.querySelector(".outside");
let playerGuess;

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
	if (playerGuess === "inBetween") {
		console.log(player[0][0].value, '1');
		console.log(player[1][0].value, '2');
		console.log(nextCard[0][0].value, 'next');
		if (player[0][0].value < player[1][0].value) {
			if (nextCard[0][0].value > player[0][0].value && nextCard[0][0].value < player[1][0].value){
				console.log("Winner, Winner, Chicken dinner!");
			}
			else {
				console.log('1 card < 2 card');
				console.log("Gimme your money!");
			}
		}
		else if (player[1][0].value < player[0][0].value) {
				if (nextCard[0][0].value > player[1][0].value && nextCard[0][0].value < player[0][0].value){
					console.log("Winner, Winner, Chicken dinner!");
				}
			else{
				console.log('2 card < 1 card');
				console.log("Gimme your money!");
			}
		}
		else{

			console.log("Deal again!");
		}
	}

	else {
		console.log(player[0][0].value, '1');
		console.log(player[1][0].value, '2');
		console.log(nextCard[0][0].value, 'next');
		if(player[1][0].value > player[0][0].value) {
			if (nextCard[0][0].value < player[0][0].value && nextCard[0][0] > player[1][0].value){
				console.log("Winner, Winner, Chicken dinner!");
			}
			else {
				console.log("Gimme your money!");
			}
		}
		else if (player[0][0].value > player[1][0].value) {
			if (nextCard[0][0].value > player[0][0].value && nextCard[0][0].value < player[1][0].value){
				console.log("Winner, Winner, Chicken dinner!");
			}
			else{
				console.log("Gimme your money!");

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

buildDeck(values, suits);
dealCardsToPlayer();
showCards();



