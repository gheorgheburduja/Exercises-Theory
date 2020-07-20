function smallestCommons(arr) {

  let gcd = (a, b) => b === 0 ? a : gcd(b, a%b);
  let lcm = (a, b) => a * b / gcd(a, b);
    
  arr.sort((a, b) => a - b);
  let currentLCM = 1;
    
  for (let i = arr[0]; i <= arr[1]; i++) {
  
    currentLCM = lcm(currentLCM, i)
    console.log(currentLCM);
  }
    
  console.log(currentLCM);
  
  return currentLCM;

}
  
smallestCommons([1,5]);

smallestCommons([10,4]);

/* This return the smallest common multiple between the numbers
passed into array (arr). The numbers are not always in ascending order. */