/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var x=numbers[0];
    numbers.forEach(element => {
        if(element>x)
        {
            x=element;
        }

    });
    return x;
}

module.exports = findLargestElement;