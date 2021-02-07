// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, for uppercase, lowercase, and numbers
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "?", "/", "<", ">"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var passArray = [{uppercase}, {lowercase}, {numeric}, {specialCharacters}];
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
    passLength,
    charOutput: charInput,
    numericOutput: numInput,
    lowerCaseOutput: lowerCaseInput,
    upperCaseOutput: upperCaseInput
    };

    console.log(passOutput);
    generatePassword(passOutput);
      function generatePassword(password) {

      var randomPassword = [];
      console.log(randomPassword);

    function upperCaseOutput() {
      return String.fromCharCode(Math.floor(Math.random() * 26) +65);
    }
  
    function lowerCaseOutput() {
      return String.fromCharCode(Math.floor(Math.random() * 26) +97);
    }
  
    function numericOutput() {
      return String.fromCharCode(Math.floor(Math.random() * 10) +48);
    }
    function charOutput() {
      const symbols = '!@#$%^&*(){}[]=<>/,.';
      return symbols[Math.floor(Math.random() * symbols.length)]
    }

     console.log(passOutput);
    generatePassword(passOutput);
      function generatePassword(password) {

      var randomPassword = [];
      console.log(randomPassword);
    
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
    console.log(randomPassword)
    document.getElementById("password").value = randomPassword
  }
    

  // Function to randomize the letters inside that we can give the password.
    
    for (var i = 0; i < password.length; ++i) {
      var randomPassword = Math.floor(Math.random() * Math.floor(randomPassword.length-1));
    }
