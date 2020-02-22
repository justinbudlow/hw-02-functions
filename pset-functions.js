/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

// function that accepts a score for the player and the dealer and determines the winner
function blackJack(player, dealer) {

// checks to see if the player busts. If so, and the dealer is under 21, the dealer wins. If both bust, return 0.
if (player > 21){
  if (dealer <= 21){
    return dealer;
  } else {
    return 0
  }
}

// checks to see if the dealer busts. If so, player wins. Player bust is already caught in the above if statement.
if (dealer > 21){
  return player
}

// checks the winner if neither player busts. Takes the difference of the player and dealer and determines who has a higher score. If the scores are equal, it's a tie.
  const difference = player - dealer;
  if (difference > 0){
      return player
  } else if (difference < 0){
      return dealer
  } else {
      return "It's a tie"
  }
}

console.log(blackJack(21, 21));

// below is my first attempt. It contains a lot of repeated logic and is not that clean.

//   const x1 = Math.abs(player - 21);
//   const y1 = Math.abs(dealer - 21);
//
//   if (x1 < y1)
//   {
//     if (player <= 21){
//       return player;
//     }
//     else if (dealer <= 21){
//       return dealer
//     }
//     else return 0
//   }
//   if (y1 < x1)
//   {
//     if (dealer <= 21){
//       return dealer;
//     }
//     else if (player <= 21){
//       return player
//     }
//     else return 0
//   }
//
//   if (player === dealer && player <=21){
//     return "It's a tie"
//   }
//
// return 0;
//
// }




// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line

// declare a word
let word = "cabbage";

// convert the word to uppercase becaues the keys in the alphabet object are capital letters
word = word.toUpperCase();

// creates an object with the scores for every letter. Each letter in the alphabet is a key, and the corresponding value is that letter's score
const alphabet = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
}

//declares three variables to be used in a for loop to loop through the word. Letter holds the current letter, i is the index in the loop, and sum is the running tally of the word's score as each letter is added.
let letter, i, sum = 0;

// loops through each letter in the word, finds the value associated with the letter from the alphabet object, and adds it to the sum (score)
for (i = 0; i < word.length; i++) {
    letter = word[i];
    // console.log(letter)
    sum += alphabet[letter];
    // console.log(sum)
}
console.log(sum);

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line

// Parent function that reverses the input word and then compares the output to the originally input word to see if they match
function isPalindrome(word){

// Nested function that reverses the input word
  function reverseString(word) {

    // Use the split() method to return a new array of the component letters of a string ("hello" would return: ["h", "e", "l", "l", "o"])
    const splitString = word.split("");

    // Use the reverse() method to reverse the newly created array (reversing our array above returns ["o", "l", "l", "e", "h"])
    const reverseArray = splitString.reverse();


    // Use the join() method to join all elements of the array into a string (joining the reversed array gives us the word backwards: "olleh")
    const reversedWord = reverseArray.join("");

    // Return the reversed string
    return reversedWord; // "olleh"
  }

// Check to see if the originally input word is the same as the returned value from the reverseString() function, which would make it a palindrome.

  if (reverseString(word) === word){
    return true
  }
  else return false

}

console.log(isPalindrome("blob"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line


// function consecutiveLetters(word){
//
//   const letters = word.split('')
//
//   console.log(letters)
//
//   for (let i = 1; i <= letters.length; i++) {
//
//     let currentLetter = letters[i-1]
//     let compareLetter = letters[i]
//
//     console.log(currentLetter)
//     console.log(compareLetter)
//
//     if (currentLetter === compareLetter){
//       return true
//     }
//
//   }
//
// return false

// }

// function to check if a word has conseuctive identical letters
function consecutiveLetters(word){

  console.log(word)

// loop through every letter in the word, store the current letter and the letter after it in variables, and check each time through to see if they match.
  for (let i = 1; i < word.length; i++) {

    let currentLetter = word[i-1]
    let compareLetter = word[i]

    console.log(currentLetter)
    console.log(compareLetter)

    if (currentLetter === compareLetter){
      return true
    }

  }

return false

}

console.log(consecutiveLetters("trudyy"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 2
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

function wordCount(phrase) {
  const wordsInPhrase = phrase.split(' ')
  const tallyOfWords = {}

  wordsInPhrase.forEach((word) => {
    // check if word exists as a key in tallyOfWords object
    // if it does not, then add word as key and assign the value of 1
    // if word already exists in the object, increment value by 1

    if (tallyOfWords[word] === undefined) {
      // if letter does not already exist in wordCount object
      tallyOfWords[word] = 1
    } else {
      // letter already exists in wordCount object
      // increment value by 1
      tallyOfWords[word] = tallyOfWords[word] + 1
    }
    // console.log(wordCount)
  })

  return tallyOfWords
}

console.log(wordCount("love me love me say that you love me"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
