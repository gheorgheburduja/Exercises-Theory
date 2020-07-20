function checkCashRegister(price, cash, cid) {

    let money = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let rest = cash - price;
    let change = [];
    const copyCID = JSON.parse(JSON.stringify(cid))  //this creates a deep copy of the nested array
    let sumCID = 0;
    let sum = 0;
    console.log(copyCID)
  
    for (let i = cid.length-1; i >= 0; i--) {
      let j = 0;
      sumCID = parseFloat((sumCID + cid[i][1]).toFixed(2));   
      while (rest >= money[i] && cid[i][1] > 0) {
  
        rest = parseFloat((rest - money[i]).toFixed(2));
        cid[i][1] = parseFloat((cid[i][1] - money[i]).toFixed(2));;
        j++;
  
        if (rest < money[i] || cid[i][1] === 0)
          {change.push([cid[i][0],money[i]*j])}
      }
    }
    console.log(copyCID)
  
    for (let i = 0; i < change.length; i++) {
      sum = parseFloat((sum + change[i][1]).toFixed(2))
      }
  
    if (sumCID < rest || sum < rest) 
    return {
      status: "INSUFFICIENT_FUNDS", 
      change: []
      }
    else if (sumCID == sum) 
    return {
      status: "CLOSED",
      change: copyCID
      }
    else return {
      status: "OPEN", 
      change: change
      }
  
}
  
checkCashRegister(19.5, 20, [
    ["PENNY", 0.5], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]])


/* This function behave like a Cash Register (Cashier).
It accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) 
as the third argument. 
It returns the exact money that you need to give to the customer depending
on the money that you have in drawer. 
If there is not enough money it returns "INSUFFICIENT_FUNDS" status. */