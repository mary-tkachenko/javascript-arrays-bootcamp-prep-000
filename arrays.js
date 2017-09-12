var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(A, b) {
  A.push(b);
  return A;
}

function destructivelyAddElementToBeginningOfArray(A, b){
  var newArray = A;
  newArray.push(b);
  return newArray;
}
