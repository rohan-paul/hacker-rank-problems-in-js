function getSecondLargest(nums) {
  var sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  var sortedArrayUnique = sortedArray.filter(function (element, index, thisArray) {
    return index === thisArray.indexOf(element);
  });
  return sortedArrayUnique[sortedArrayUnique.length - 2];
}

// filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. So, in the above case, for the second occurance of the same element in the provided array, the .indexOf(element) will be different than the current index