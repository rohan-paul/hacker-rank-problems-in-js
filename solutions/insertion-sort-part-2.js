/* https://www.hackerrank.com/challenges/insertionsort2/problem

In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element.

Sample Input

6
1 4 3 5 6 2
Sample Output

1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6


Skip testing at position 0 (i.e. number 1) against itself . It is already sorted.

Test position 1 (ie. no 4) against position 0 : 4 > 1 , no more to check, no change.
Print arr

Test position 2 (ie. 3) against positions 1 and 0:

 - 3 < 4, new position may be 1. Keep checking.
 - 3 > 1, so insert 3 at position 1 and move others to the right.
Print arr

Test position 3 (ie 5 ) against positions 2, 1, 0 (as necessary): no change.
Print arr

Test position 4 (ie. 6) against positions 3, 2, 1, 0 : no change.
Print arr

Test position 5 (i.e. 2) against positions 4, 3, 2, 1, 0, insert 2 at position 1 and move others to the right.
Print arr

*/

/* My Note - A> I am effectively re-writing the whole array, by doing an insertion at each iteraion loop of j
B> With each loop, if the (i+1)-th element is > (i)-th element, then just do a replacement code with < arr[j] = currentRightEnding; >

*/

insertionSort2 = (n, arr) => {

  // start looping through the array. But while I am staring the loop at i=0, but will start all the comparisons from i= i + 1. And also, i < n - 1 because, (n-1)-th element will be the last right ending element and that I am taking care of by doing[i + 1] at each iteration loop
  for (let i = 0; i < n - 1; i++) {

    // Set the current right-end element from which to start the comparisons towards left all the way upto i=0
    let currentRightEnding = parseInt(arr[i + 1]);

    // This next comparison loop will start from i+1 and go leftwards.
    for (var j = i + 1; j >= 0; j--) {

      // Because, I have to compare with all the left elements starting from j-1 all the way upto 0. So, to start the comparison between each 2 sets of elements, first make the current j element to temporarily take the value of j-1 element before the comparion.
      arr[j] = parseInt(arr[j-1])

      if (currentRightEnding >= arr[j]) {
        // Replace j-th position, ie. this position with that higher value of currentRightEnding. This code effectively replacing the whole array, by inserting the higher element at the j-th (i.e. (i + 1)-th ) position.
        arr[j] = currentRightEnding;
        break;
      }
    }

    // If during the 
    if (j === -1) {
      arr[0] = currentRightEnding;
    }
    console.log(arr.join(" "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);