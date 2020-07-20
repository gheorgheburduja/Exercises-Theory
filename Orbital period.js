function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = []
  
    let func = arr.map(
        (x) => 2*Math.PI*Math.sqrt(((earthRadius + x.avgAlt)**3)/GM))

    console.log(func)
  
    for (let i = 0; i < arr.length; i++) {
      
        newArr.push({
            name: arr[i].name,
            orbitalPeriod: parseInt(func[i].toFixed())
        })
   
    }
    console.log(newArr)
  
    return newArr;
}
  
orbitalPeriod([
    {name: "iss", avgAlt: 413.6}, 
    {name: "hubble", avgAlt: 556.7}, 
    {name: "moon", avgAlt: 378632.553}
]);


// OR


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    return arr.map(x => ({
        name: x.name,
        orbitalPeriod: Math.round(2*Math.PI*Math.sqrt(((earthRadius + x.avgAlt)**3)/GM))
    }))
}
  
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
  
/* This function calculate how much time (in seconds) need an object at a specified 
altitude to go around the Earth. */