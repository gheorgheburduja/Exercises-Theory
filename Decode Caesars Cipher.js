function rot13(str) {

    let arr = str.split('');
    console.log(arr);
  
    for (let i = 0; i < arr.length; i++) {
  
      let func = () => {
        return arr[i].charCodeAt(0) + 13 <= 90
      ? String.fromCharCode(arr[i].charCodeAt(0) + 13)
      : String.fromCharCode(arr[i].charCodeAt(0) - 13);
      };
      arr[i] = arr[i].replace(/[A-Z]/, func);
      
    }
    console.log(arr);
  
    return arr.join('');
}
  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");


// OR SHORT USING MODULO


function rot13(str) {
    // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L =>
      String.fromCharCode((L.charCodeAt(0) % 26) + 65)
    );
}

/* This function decode a Caesars cipher. 
It takes a ROT13 encoded string as input and returns a decoded string. 
 ROT13 cipher is where the values of the letters are shifted by 13 places. 
 Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.*/