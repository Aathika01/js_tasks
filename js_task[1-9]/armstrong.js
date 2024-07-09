// Function to check if a number is an Armstrong number
function isArmstrong(n) {
    let sum = 0;
    let temp = n;
    let digits = n.toString().split('').map(Number);
  
    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(digits[i], digits.length);
    }
  
    return sum === n;
  }
  
  console.log(isArmstrong(371)); 
  console.log(isArmstrong(123)); 
