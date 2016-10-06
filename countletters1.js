function countLetters(sentence) {

	var noSpaces = sentence.split(" ").join("");
	var allLetters = noSpaces.split("");
	var objLetters = {};

	for (var i = 0; i < allLetters.length; i++) {

		var currentLetter = allLetters[i];
		objLetters[currentLetter] = [];

	}
	console.log[objLetters];

	for (var j = 0; j < allLetters.length; j++) {

		var currentLetter = allLetters[j];
		objLetters[currentLetter].push(j);

	}


	return objLetters;

}


var input = "lighthouse in the house"

console.log(countLetters(input))