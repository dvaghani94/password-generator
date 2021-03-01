// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, for uppercase, lowercase, and numbers
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "?", "/", "<", ">"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var passLength;
var charInput;
var numInput;
var lowerCaseInput;
var upperCaseInput;
var userChoice;
// Function that prompts user for number of characters for password.

function generatePassword() {
  
  passLength = prompt ("How many characters would you like your password to contain?");  

// Confirming user choice is between 8-128 characters.

    if (passLength < 8) {
     alert('Password length must be between 8 - 128 characters');
     passLength = prompt ("Please choose a number more than 8 and less than 128 characters: ");
    }
// Prompts for use to choose which characters they want. Confirm prompt for all 4 characters.
      
      if (passLength >= 8) {
      charInput = confirm("Would you like to use special characters?");
      numInput = confirm("Would you like to use numbers?");
      lowerCaseInput = confirm("Would you like to use lowercase letters?");
      upperCaseInput = confirm("Would you like to use uppercase letters?");
     } 

// Confirming user picked at least one character type for password.
      if (!charInput && !numInput && !lowerCaseInput && !upperCaseInput) {
        alert('You must select at least one character type!');
        charInput = confirm("Would you like to use special characters?");
        numInput = confirm("Would you like to use numbers?");
        lowerCaseInput = confirm("Would you like to use lowercase letters?");
        upperCaseInput = confirm("Would you like to use uppercase letters?");
      }  
       // capture the users selected response
      else if (charInput && numInput && lowerCaseInput && upperCaseInput) {
        userChoice = specialCharacters.concat(numeric, lowerCase, upperCase);
      }
      else if (charInput && numInput && lowerCaseInput) {
        userChoice = specialCharacters.concat(numeric, lowerCase);
      }
      else if (charInput && numInput && upperCaseInput) {
        userChoice = specialCharacters.concat(numeric, upperCase);
      }
      else if (charInput && lowerCaseInput && upperCaseInput) {
        userChoice = specialCharacters.concat(lowerCase, upperCase);
      }
      else if (numInput && lowerCaseInput && upperCaseInput) {
        userChoice = numeric.concat(lowerCase, upperCase);
      }
      else if (charInput && numInput) {
        userChoice = specialCharacters.concat(numeric);
      }
      else if (charInput && lowerCaseInput) {
        userChoice = specialCharacters.concat(lowerCase);
      }
      else if (charInput && upperCaseInput) {
        userChoice = specialCharacters.concat(upperCase);
      }
      else if (numInput && lowerCaseInput) {
        userChoice = numeric.concat(lowerCase);
      }
      else if (numInput && upperCaseInput) {
        userChoice = numeric.concat(upperCase);
      }
      else if (lowerCaseInput && upperCaseInput) {
        userChoice = lowerCase.concat(upperCase);
      }
      else if (charInput) {
        userChoice = specialCharacters;
      }
      else if (numInput) {
        userChoice = numeric;
      }
      else if (lowerCaseInput) {
        userChoice = lowerCase;
      }
      else if (upperCaseInput) {
        userChoice = upperCase;
      };

  var guaranteedOptions = [];
// we now need an object to store the user input- meaning the length, what characters will be used in password
        
        //capure the guarnateed options = options created from the random method
    
    // Function to randomize the letters inside that we can give the password.
    
    // for (var i = 0; i < password.length; ++i) {
    //   var choiceInde = Math.floor(Math.random() * Math.floor(choiceInde.length-1));
    // }

    for (var i = 0; i < passLength; i++) {
      var choiceInde = userChoice[Math.floor(Math.random()* userChoice.length)];
      guaranteedOptions.push(choiceInde);
      console.log(choiceInde)
    }
    var passwordText = guaranteedOptions.join('');
    writePassword(passwordText);
    console.log(passwordText)
    return passwordText;
  }

  // Write password to the #password input
function writePassword(passwordText) {
  var passwordText = document.getElementById("#password")
  } 

  // Add event listener to generate button
  generateBtn.addEventListener("click", function () {
    passwordText = generatePassword();
    passwordText = document.getElementById("password")
  });
