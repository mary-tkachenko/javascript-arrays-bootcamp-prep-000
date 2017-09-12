var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(A, b) {
  A.push(b);
  return A;
}


function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [...array];
  newArray.unshift(element);
  return newArray;
}

