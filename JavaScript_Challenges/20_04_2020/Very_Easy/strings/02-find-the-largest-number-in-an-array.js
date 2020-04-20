/**
 *  Find the Largest Number in an Array
 *  ===================================
 */

/*
    #arrays #loops #numbers #sorting
    --------------------------------

    Create a function that takes an array of numbers. Return the largest number in the array.

    Examples:

    findLargestNum([4, 5, 1, 3]) ➞ 5

    findLargestNum([300, 200, 600, 150]) ➞ 600

    findLargestNum([1000, 1001, 857, 1]) ➞ 1001

    Notes:

    - Expect either a positive number or zero (there are no negative numbers).
    - If you get stuck on a challenge, find help in the Resources tab.
    - If you're really stuck, unlock solutions in the Solutions tab.
*/

//  Solution 1

function findLargestNum(arr) {
    return Math.max(...arr);
}

// Solution 2

function findLargestNum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}