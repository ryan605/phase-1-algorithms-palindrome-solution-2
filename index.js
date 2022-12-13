function isPalindrome(word) {
  for(let i = 0; i < word.length / 2; i++)
  {
    if(word[i] != word[word.length - i - 1])
    {
      return false
    }else{
    return true
    }
    
  }
}

/* 
  
  * for loop through half the length of word
  * if the first half is not equal to last half return false
  * Otherwise return true
*/

/*
  * I had to compare the first half of the string with it's last.
  * If they match it is a palindrome
  * You can find half the length of a string by using the method 'stringname.length / 2'
  * Take the first half and loop throgh it and also loop through the second half from the back
  * Note: Looping from the back does not start from index 0, it starts from -1
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

console.log(isPalindrome('wordfgrow'))