var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(A, b) {
  A.push(b);
  return A;
}


function addElementToBeginningOfArray(array, element){
  var newArray = [...array];
  newArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
