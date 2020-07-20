function steamrollArray(arr) {

    let flatArr = [];
  
    function flated (arg) {
      
        if (!Array.isArray(arg)) {
          flatArr.push(arg);
                    
        } else 
        for(let i = 0; i < arg.length; i++) {
            flated(arg[i]);
        }
      
    }
    
    arr.forEach(flated);
    console.log(flatArr); // [1, 2, 3, 4]

    return flatArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);


  // OR SHORTER VERSION:


  function steamrollArray(arr) {

    let flatArr = [].concat(...arr);
  
    return flatArr.some(el => Array.isArray(el)) // or flatArr.some(Array.isArray)
    ? steamrollArray(flatArr) 
    : flatArr;
    
}
  
steamrollArray([1, [2], [3, [[4]]]]);

/* This function imitates Array.prototype.flat() method. */
  