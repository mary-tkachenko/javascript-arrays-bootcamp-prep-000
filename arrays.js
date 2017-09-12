var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [...array];
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray (array, element){
  var freshArray = [...array];
  freshArray.push(element);
  return freshArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
