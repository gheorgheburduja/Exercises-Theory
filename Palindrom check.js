function palindrome(str) {

    let regexp = /[_]|\W+/g
    let newStr = str.replace(regexp, '').toLowerCase();
  
    console.log(newStr)
      
    return newStr.split('').reverse().join('') === newStr;
}
   
palindrome('A man, a plan, a canal. Panama');

/* This function checks if a string is palindrom, 
even are included any types of signs, spaces or if characters 
are upper case.*/