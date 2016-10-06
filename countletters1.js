function countLetters(sentence) {

	var noSpaces = sentence.split(" ").join("");
	var allLetters = noSpaces.split("");
	var objLetters = {};

	for (var i = 0; i < allLetters.length; i++) {


//now we are calling an object (an array to be specific)

		var currentLetter = allLetters[i];
		objLetters[currentLetter] = [];

	}
	console.log[objLetters];

	for (var j = 0; j < allLetters.length; j++) {

//in order to add an element to an object, use .push

		var currentLetter = allLetters[j];
		objLetters[currentLetter].push(j);

	}


	return objLetters;

}


var input = "lighthouse in the house"

console.log(countLetters(input))