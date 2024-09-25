// Define the puzzles in an array
const puzzles = [
    {
      description: "Declare a variable 'x' and set it to 10.",
      validate: function() {
        return typeof x !== 'undefined' && x === 10;
      },
      successMessage: "Correct! You've declared a variable 'x' with the value 10.",
      errorMessage: "Try again. You need to declare a variable 'x' and set it to 10."
    },
    {
      description: "Write a function 'greet' that returns 'Hello, World!'.",
      validate: function() {
        return typeof greet === 'function' && greet() === "Hello, World!";
      },
      successMessage: "Great job! Your function returns the correct output.",
      errorMessage: "Try again. Make sure your 'greet' function returns 'Hello, World!'."
    },
    {
      description: "Declare an array 'numbers' with values [1, 2, 3, 4, 5].",
      validate: function() {
        return Array.isArray(numbers) && numbers.length === 5 && numbers[0] === 1 && numbers[4] === 5;
      },
      successMessage: "Awesome! You've correctly declared an array 'numbers'.",
      errorMessage: "Try again. You need to declare an array 'numbers' with the values [1, 2, 3, 4, 5]."
    }
  ];
  
  // Track the current puzzle index
  let currentPuzzleIndex = 0;
  
  // Initialize the game with the first puzzle
  function loadPuzzle() {
    document.getElementById("puzzle-description").innerText = puzzles[currentPuzzleIndex].description;
    document.getElementById("codeInput").value = ''; // Clear the code input
    document.getElementById("output").innerText = 'Your output will appear here...'; // Reset output
  }
  
  // Run the player's code and validate the result
  function runCode() {
    const playerCode = document.getElementById("codeInput").value;
  
    try {
      // Evaluate the player's code
      eval(playerCode);
  
      // Check if the solution is correct using the validate function of the current puzzle
      if (puzzles[currentPuzzleIndex].validate()) {
        document.getElementById("output").innerText = puzzles[currentPuzzleIndex].successMessage;
  
        // Move to the next puzzle if available
        if (currentPuzzleIndex < puzzles.length - 1) {
          currentPuzzleIndex++;
          setTimeout(loadPuzzle, 2000); // Wait 2 seconds and load the next puzzle
        } else {
          document.getElementById("output").innerText += "\nCongratulations! You've completed all the puzzles.";
        }
      } else {
        document.getElementById("output").innerText = puzzles[currentPuzzleIndex].errorMessage;
      }
    } catch (error) {
      document.getElementById("output").innerText = `Error: ${error.message}`;
    }
  }
  
  // Add event listener to the Run Code button
  document.getElementById("runCodeBtn").addEventListener("click", runCode);
  
  // Load the first puzzle
  loadPuzzle();
  