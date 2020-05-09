// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 contains a closure. In counter 1, count is within the scope of the counter. In counter 2, count is outside the scope of the function. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1, this is because counter1 is a function that returns another function. The function it returns is a closure. Function 2 only returns a number, the count.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 lets you have multiple seperate counters. Counter 2 increments a universal variable, so will not reset each time you use it.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

   return Math.floor(Math.random() *3);

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// What's the difference here between using "Home" and Home as the key (besides the first being a string)? Is there any reason not to do the latter? 

function finalScore(cb, innNum){

  let score = {
    "Home": 0,
    "Away": 0,
  }

  for (let i = 0; i <innNum; i++) {
    score["Home"] += cb();
    score["Away"] += cb();

  }

  return score;

}

console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cb, innNum) {
  let score = {
    "Home": 0,
    "Away": 0,
  }
  let scoreArray = [];
  // Looks outward for score and then increases appropriate amount and returns
  
  for (let i = 1; i <= innNum; i++) {
      score["Home"] += cb();
      score["Away"] += cb();
      //Create the sentence
      if (i === 1) {
        scoreArray.push(`1st inning: ${score["Home"]} - ${score["Away"]}`);
      }
      else if(i ===2) {
        scoreArray.push( `2nd inning: ${score["Home"]} - ${score["Away"]}`);
      }
      else if(i ===3) {
        scoreArray.push( `3rd inning: ${score["Home"]} - ${score["Away"]}`);
      }
      else {
        scoreArray.push( `${i}th inning: ${score["Home"]} - ${score["Away"]}`);
      }

    }
   

    scoreArray.push(`Final Score: ${score["Home"]} - ${score["Away"]}`);
    return scoreArray;
}

//Should you be returning instead of storing in array?

console.log(scoreboard(inning,9));

