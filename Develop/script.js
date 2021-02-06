// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, for uppercase, lowercase, and numbers
var specialCharacters = "!@#$%^&*()_+?/\~<>".split();
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split();
var numbers = "0123456789".split(); 

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
    passLength = length,
    charInput = specialCharacters,
    numInput = numbers,
    lowerCaseInput = lowerCase,
    upperCaseInput = upperCase
  }
    return passOutput;
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); {
    if (charInput == true) {
      caseArray.push(specialCharacters);
    }
    if (numInput == true) {
      caseArray.push(numbers);
    }
    if (lowerCaseInput == true) {
      caseArray.push(lowerCase);
    }
    if (upperCaseInput == true) {
      caseArray.push(upperCase);
    }

    document.getElementById("password").value = [];

    for(var i = 0, i < enter, i++) {

    }

   passwordText.value = password;

  }  
    for(var j = 0, j < length, j++);

}

// an array for a different choice of characters
  

  // we will now return the object- we will now know what will be the possible choices.

  // after we have user inputs, we want to write a function to randomize the letters inside that we can give the password (will  use math.randomize)

  // then we will create another function- make an array with the results, an array for possible characters,
  // and set an array for gauranteed characters (characters gauranteed for password)

  //then we will create a loop that goes through the results array - (need to look up push and join)
  // once we push into a new array (results array), using join we will take the characters from results array and turn into a string

  //after we turn into a string, we write the password to the page using (.value)


  // Write a function that allows us to propt the user. Should be written in a function. 
// In that function we are going to ask the user how many words we want the password to be. 