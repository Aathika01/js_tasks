function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  console.log(isPalindrome("mom")); 
  console.log(isPalindrome("dhoni")); 