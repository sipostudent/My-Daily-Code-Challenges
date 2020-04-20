/**
 *  Check if an Integer is Divisible By Five
 *  ========================================
 */

/*
    #maths #numbers #validation
    ---------------------------

    Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

    Examples:

    divisibleByFive(5) ➞ true

    divisibleByFive(-55) ➞ true

    divisibleByFive(37) ➞ false

    Notes:

    - Don't forget to return the result.
    - If you get stuck on a challenge, find help in the Resources tab.
    - If you're really stuck, unlock solutions in the Solutions tab.
*/

//  Solution

function divisibleByFive(n) {
	if (n % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

// A Better Solution

function divisibleByFive(n) {
    return n % 5 === 0;
}