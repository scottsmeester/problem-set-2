

// #1

// function named firstReverse that takes a single string parameter 
// and returns the string in reverse order. 

var myString = "True humility is not thinking less of yourself; It is thinking of yourself less.";

console.log('string reversed: ', myString.split('').reverse().join(''));



// #2

// function swapCase that takes a single string parameter and swaps the
// case of each character. For example: if a string is "Hello World" the
// output should be "hELLO wORLD". Let numbers and symbols stay the way 
// they are.

console.log('case reversed: ', myString.split('').map(function(letter){
	return (letter === letter.toUpperCase()) ? letter.toLowerCase() : letter.toUpperCase();
}).join(''));


// #3

// function letterCount that takes a single string parameter and returns 
// the first word with the greatest number of repeated letters. For example: 
// "Today, is the greatest day ever!" should return greatest because it has 
// 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there 
// are no words with repeating letters return -1. Words will be separated by 
// single spaces. 


console.log(
	myString.split(' ') // break string to words
	.filter(function(word){
			return word.length > 1; // eliminate one letter words
	})
	.map(function(word){ // returns an array of objects 
		return { 
			word: word,
			count: word
			.split('') // put each word into letters
			.sort() // sort letters so we can see duplicates together
			.reduce(function(memo, item, i, arr){
				return (i > 0 && arr[i - 1] === item) ? ++memo : memo; // gives a count
			}, 0)
		};
	})
	.sort(function(a, b){
		return b.count - a.count;
	})[0].word
);
