/**
 *  Truthy or Falsy?
 *  ================
 */

/*
    #conditons #control_flow #language_fundamentals #validation
    -----------------------------------------------------------

    A value is said to be "truthy" if it evaluates to true in a Boolean context. 
    All values are truthy in JavaScript unless they're one of the following:

    - false
    - null
    - undefined
    - 0
    - NaN
    - ""

    In JavaScript, an empty object and an empty array are both considered "truthy," 
    but an empty string is considered false when evaluated as a Boolean 
    (this behavior is what we call "falsey").

    Create a function that takes an argument of any data type and returns 1 if it's 
    truthy and 0 if it's falsy.

    Examples:

    isTruthy(0) ➞ 0

    isTruthy(false) ➞ 0

    isTruthy("") ➞ 0

    isTruthy("false") ➞ 1

    Notes:

    - You may have to take into account NaN's unique behavior in JavaScript. While other falsey values are equal to themselves, NaN != NaN
    - If you get stuck on a challenge, find help in the Resources tab.
    - If you're really stuck, unlock solutions in the Solutions tab.
*/

// Solution 1

function isTruthy(input) {
	if(input) {
		return 1
	} else {
		return 0
	}
}

//  Solution 2

function isTruthy(input) {
	return input ? 1 : 0;
}

//  Tests

// Test.assertEquals(isTruthy(1), 1)
// Test.assertEquals(isTruthy(-1), 1)
// Test.assertEquals(isTruthy("false"), 1)
// Test.assertEquals(isTruthy([]), 1)
// Test.assertEquals(isTruthy(true), 1)
// Test.assertEquals(isTruthy({}), 1)
// Test.assertEquals(isTruthy(function(){}), 1)
// Test.assertEquals(isTruthy(0), 0)
// Test.assertEquals(isTruthy(""), 0)
// Test.assertEquals(isTruthy(null), 0)
// Test.assertEquals(isTruthy(undefined), 0)
// Test.assertEquals(isTruthy(false), 0)
// Test.assertEquals(isTruthy(NaN), 0)
// Test.assertEquals(isTruthy(''), 0)