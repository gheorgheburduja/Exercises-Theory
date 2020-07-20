//repeat the function inside itself behaves like a loop

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]


function countdown(n){
    return (n<1) ? [] : [n,...countdown(n-1)];
}
console.log(countdown(7)); // [ 7, 6, 5, 4, 3, 2, 1 ]