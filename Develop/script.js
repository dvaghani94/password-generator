// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, for uppercase, lowercase, and numbers
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "?", "/", "<", ">"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

// Function that prompts user for number of characters for password.

generateBtn.addEventListener("click", function() {
  var passLength = prompt ("How many characters would you like your password to contain?");  

// Confirming user choice is between 8-128 characters.
    if (passLength < 8) {
     alert('Password length must be between 8 - 128 characters');
     passLength = prompt ("Please choose a number more than 8 and less than 128 characters: ");
    }
// Prompts for use to choose which characters they want. Confirm prompt for all 4 characters.
      if (passLength >= 8) {
      var charInput = confirm("Would you like to use special characters?");
      var numInput = confirm("Would you like to use numbers?");
      var lowerCaseInput = confirm("Would you like to use lowercase letters?");
      var upperCaseInput = confirm("Would you like to use uppercase letters?");
     } 
// Confirming user picked at least one character type for password.
      if (!charInput && !numInput && !lowerCaseInput && !upperCaseInput) {
        alert('You must select at least one character type!');
        charInput = confirm("Would you like to use special characters?");
        numInput = confirm("Would you like to use numbers?");
        lowerCaseInput = confirm("Would you like to use lowercase letters?");
        upperCaseInput = confirm("Would you like to use uppercase letters?");
      }   
// we now need an object to store the user input- meaning the length, what characters will be used in password
    var passOutput = {
    passLength: length,
    charOutput: charInput,
    numericOutput: numInput,
    lowerCaseOutput: lowerCaseInput,
    upperCaseOutput: upperCaseInput
  }

// Returning object with user choice.
    return passOutput; 
  
  }); 

  function writePassword() {

    var password = generatePassword();  
    console.log(password)

    var randomPassword = [];
      console.log(randomPassword)
    
    if (password.charOutput) {
      for(i = 0; i < specialCharacters.length; ++i) {
        randomPassword.push(specialCharacters[i]);
      }
    }
    if (password.numericOutput) {
      for(i = 0; i < numeric.length; ++i) {
        randomPassword.push(numeric[i]);
      }
    }
    if (password.lowerCaseOutput) {
      for(i = 0; i < lowerCase.length; ++i) {
        randomPassword.push(lowerCase[i]);
      }
    }
    if (password.upperCaseOutput) {
      for(i = 0; i < upperCase.length; ++i) {
        randomPassword.push(upperCase[i]);
      }
    }

  // Write password to the #password input
      var passwordText = document.querySelector("#password");

  // Function to randomize the letters inside that we can give the password.
    
    for (var i = 0; i < password.length; ++i) {
      var randomPassword = Math.floor(Math.random() * Math.floor(randomPassword.length));
        passwordText.push(randomPassword)
    }


    document.getElementById("password").value = generatePassword
  }

  
    







// an array for a different choice of characters
  

  

  // then we will create another function- make an array with the results, an array for possible characters,
  // and set an array for gauranteed characters (characters gauranteed for password)

  //then we will create a loop that goes through the results array - (need to look up push and join)
  // once we push into a new array (results array), using join we will take the characters from results array and turn into a string

  //after we turn into a string, we write the password to the page using (.value)