// - Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.
// - If the player has an incorrect guess, display an alert message that informs the player:
//     - Whether their guess is too high or too low, and…
//     - A list of all the previously guessed numbers (without showing the square brackets of an array).
// - If the player has guessed the secret number:
//     - Display an alert message that congrats the player and informs them of how many guesses they took.
//     - End the gameplay.


// 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
// 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum]:*.
// Replacing [smallestNum] 
// Hint - use a template literal for the prompt message.
// 3. Ensure that the `getGuess` method returns a value that:
//     - Is a *number*, not a *string*.
//     - Is between `smallestNum` and `biggestNum`, inclusive.
//     - Hints:
//         - This is a great use case for a `while` loop.
//         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//     - Hint: this is an excellent use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.



const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],

  // state of the game 
  // values/variables 

  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do{ 
      // establish the secret num
      this.prevGuess.push(this.getGuess())
       // push into getGuess
      // this.render()
    } while(this.prevGuess[this.prevGuess.length - 1] !== this.secretNum)
    console.log(this.prevGuess)
    // while current guess !== secret num, console log prev guess
  },

  // retrieve input from user
  getGuess: function() {
    let currentGuess = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    // user input: string=> parseInt => integer / create dialogue box with prompt using template literal to represent min and max range of our game
    while (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
      currentGuess = parseInt (prompt (`Please enter a valid number. The guess must be between ${this.biggestNum} and ${this.smallestNum}. Please guess again.`))  //This prompt comes up if the OR conditions are met. 
    }
    return currentGuess // invoke current guess
},
render(){
  if (this.prevGuess[this.prevGuess.length - 1] === parseInt(this.secretNum)) {
    alert (`Congrats! You guess the number is ${this.prevGuesses.length} guesses`)
  } else  {
    if (this.prevGuess[this.prevGuess.length - 1] < parseInt(this.secretNum)) {
      alert (`Your guess is too low! Previous guesses ${this.prevGuesses.join()} `) 
    
  }    if (this.prevGuess[this.prevGuess.length - 1] > parseInt(this.secretNum)) {

    alert (`Your guess is too high! Previous guesses ${this.prevGuesses.join()} `)


  } }

}




}

game.play ()
