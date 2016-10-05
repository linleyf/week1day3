//Write a function countLetters that can (return to) us us all the unique characters that exist in a string 
//that is passed into the function.
//the function should also report back how many instances of each letter were found in the string.
//countLetters needs to return an object that can represent the stats for the sentence it is given
//Functions can only return one thing. 
//countLetters("lighthouse in the house")

//don't forget we are returning an object
//it's likely mutable 
//

//.split?
//.

//step 1: baby steps, create objects by defining each variable
//step 2: Make input of count.Letters into a function
//step 3: Make a variable (allLetters) that splits sentence into an array because you cannot run a loop if it's not an array
//step 4: Create a loop that outputs each letter
//step 5: Create a new object (objeLetters) that names var current Letter equal allLetters[i] 
//then objLetters references a property called the value currentLetter and assigns it a value of 0 (for now)

function countLetters(sentence) {

var noSpaces = sentence.split(" ").join("")
var allLetters = noSpaces.split ("")
var objLetters = {
}
for (var i = 0; i < allLetters.length; i++) {

var currentLetter = allLetters[i]
objLetters[currentLetter] = 0

}

for (var j = 0; j < allLetters.length; j++) {
	

var currentLetter = allLetters[j]
objLetters[currentLetter] = objLetters[currentLetter] + 1

}


// 	var letter = "l"
// objLetters[letter] = 0

// letter = "i"
// objLetters[letter] = 0

// letter = "g"
// objLetters[letter] = 0

// letter = "h"
// objLetters[letter] = 0

// letter = "t"
// objLetters[letter] = 0

// letter = "o"
// objLetters[letter] = 0

// letter = "u"
// objLetters[letter] = 0

// letter = "s"
// objLetters[letter] = 0

// letter = "e"
// objLetters[letter] = 0

// letter = "n"
// objLetters[letter] = 0
	
return objLetters

}


var input = "lighthouse in the house"

console.log(countLetters(input))






//console.log countLetters("lighthouse in the house")
