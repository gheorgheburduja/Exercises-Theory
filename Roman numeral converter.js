function convertToRoman(num) {
  
  let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let arrabics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romanic = ''
  let number = 0
  
  if (typeof num === 'number') {
  for (let i = 0; i < arrabics.length; i++) {
    while (num >= arrabics[i]) {
      romanic += romans[i];
      num -=arrabics[i]
    }
  }
    // console.log(romanic)
    return romanic;
  } else if (/[MDCLXVI]+/.test(num)) {

    let roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let numeric = [1000, 500, 100, 50, 10, 5, 1]
    let arr = []
    arr = num.split('')

    for (let i = 0; i < arr.length; i++) {

      if (roman.indexOf(arr[i]) > roman.indexOf(arr[i+1])) {

        if (roman.indexOf(arr[i+1]) === -1 )  
        return number += numeric[roman.indexOf(arr[i])] ;

        number -= numeric[roman.indexOf(arr[i])];

      }  else number += numeric[roman.indexOf(arr[i])]       
        
    }
    
  } 
  
  else return 'Type a number or a valid roman numeral!'
}

convertToRoman('MDCLVI');
convertToRoman(1654);
convertToRoman('dnsxg');



  
/* This function converts a number into a roman numeral 
and a roman numeral into a number. If not a number or 
not a valid roman numeral is inserted, 
then 'Type a number or a valid roman numeral!' is returned.*/