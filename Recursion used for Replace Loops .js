//repetarea functiei in aceeasi functie se comporta ca o bucla

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

console.log(multiply([1,2,3,4,5,6],5));


function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}

console.log(multiply([1,2,3,4,5,6],5)); 