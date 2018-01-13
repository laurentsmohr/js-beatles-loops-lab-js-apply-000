function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}

/*Create a function `johnLennonFacts`. This function will accept one argument, an array of facts
about John Lennon (note that it might not be exactly the following facts)
Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact.
The function should return an array of strings with exclamation points.
*/

function johnLennonFacts(arr) {
  debugger;
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}
