var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(A, b) {
  A.unshift(b);
  return A;
}

function destructivelyAddElementToBeginningOfArray(A, b){
  var newArray = A;
  newArray.unshift(b);
  return newArray;
}


