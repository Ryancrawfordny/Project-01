const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player = [];
let nextCard = [];



function buildDeck(arr1, arr2) {
	for (let i =0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let card = { num: arr1[i], suit: arr2[j], value: i+2}
			deck.push(card);
		}
	}
	return deck;
};

function dealCardsToPlayer() {
	let num = Math.floor(Math.random()*deck.length);
	let num2 = Math.floor(Math.random()*deck.length);
	let num3 = Math.floor(Math.random()*deck.length);
	player.push(deck.splice(num, 1));
	player.push(deck.splice(num2, 1));
	nextCard.push(deck.splice(num3, 1));

	console.log(player);



};

function showCards() {
	console.log(`player has a ${player[0][0].num} of ${player[0][0].suit}`);
	console.log(`player has a ${player[1][0].num} of ${player[1][0].suit}`);

}


	


buildDeck(values, suits);
dealCardsToPlayer();
showCards();
