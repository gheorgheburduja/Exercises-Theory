function addTogether() {

    let args = [...arguments]
    // console.log(args)

    return args.some(x => typeof x !== 'number') 

    ? undefined 
    : args.length == 1 
    ? n => (typeof n === 'number')? n + args[0] : undefined
    : args[0] + args[1]

}
  
console.log(addTogether(2,9));
console.log(addTogether(2)(9));
console.log(addTogether(2)([]));


/* This function make sum of two arguments if they are passed together.
If just one argument is passed, then it returns a function wich expects 
one argument and return the sum. 
If one or both arguments are not numbers, then return undefined.*/