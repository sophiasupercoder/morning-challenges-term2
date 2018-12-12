/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largest_number.js
(You'll need mocha installed first: `npm install mocha -g`)
*/


function largestNumber(arr) {
    let largest = null;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

module.exports = largestNumber