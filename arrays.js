var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return new Array();
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
