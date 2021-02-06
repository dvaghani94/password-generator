// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!@#$%^&*()_+?/\~<>".split();
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split();
var numbers = "0123456789".split(); 


generateBtn.addEventListener("click", function() {
  var passLength = prompt ("How many characters would you like your password to contain?", "i");  
    if (passLength < 8) {
     alert('Password length must be between 8 - 128 characters');
     passLength = prompt ("Please choose a number more than 8 and less than 128 characters: ");
    }
      if (passLength >= 8) {
      var charInput = confirm("Would you like to use special characters?");
      var numInput = confirm("Would you like to use numbers?");
      var lowerCaseInput = confirm("Would you like to use lowercase letters?");
      var upperCaseInput = confirm("Would you like to use uppercase letters?");
     } 
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

  }

   // for (var i = 0, i<passLength, i++) {
    var randomChar;
    var randomNum;
    var randomUpperCase;
    var randomLowerCase;

  randomNum = parseInt(Math.floor(Math.random() * caseArray.length));
  randomChar = caseArray[randomNum];
  randomLowerCase = Math.floor(Math.random() * selectNumArray.length);
  randomUpperCase = selectedCharArray[randomLowerCase];

  passwordString += randomUpperCase;

  }

   // passwordText.value = password;

// }








// an array for a different choice of characters
  // an array for special characters, for uppercase, lowercase, and numbers


  //write a function that allows us to prompt the user. should be written in a function.
  // in that function we are going to ask the user how many words we want the password to be.

  //after that prompt, we need a check to make sure they chose between 8-128 characters

  //next we will prompt them for what characters they want. will be a confirm prompt for all 4.

  // need to make sure that the user picked at least one character type for password.

  // we now need an object to store the user input- meaning the length, what characters will be used in password

  // we will now return the object- we will now know what will be the possible choices.

  // after we have user inputs, we want to write a function to randomize the letters inside that we can give the password (will  use math.randomize)

  // then we will create another function- make an array with the results, an array for possible characters,
  // and set an array for gauranteed characters (characters gauranteed for password)

  //then we will create a loop that goes through the results array - (need to look up push and join)
  // once we push into a new array (results array), using join we will take the characters from results array and turn into a string

  //after we turn into a string, we write the password to the page using (.value)


  // Write a function that allows us to propt the user. Should be written in a function. 
// In that function we are going to ask the user how many words we want the password to be. 



// .join 

