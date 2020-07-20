function truthCheck(collection, pre) {

    return collection

  .map(x => x[pre])     //arr.map creates a new array
  .map(Boolean)
  .every((x) => Boolean(x) === true);
    // OR
    return collection.every(x => x[pre]);
  
}
  
truthCheck([{"name": "Pete", "onBoat": true},
   {"name": "Repeat", "onBoat": true, "alias": "Repete"},
   {"name": "FastForward", "onBoat": null}], "onBoat");

/*The function it checks if every object inside the array (collection)
has the key (pre) truthy or falsy and return a boolean*/