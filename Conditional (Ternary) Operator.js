//  condition ? statement-if-true : statement-if-false;

function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
}


function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}