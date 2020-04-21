/**
 *  2. Convert Minutes into Seconds
 *  ===============================
 */

/*
    #language_fundamentals #maths
    -----------------------------

    Write a function that takes an integer `minutes` and converts it to seconds

    Examples:

    convert(5) ➞ 300

    convert(3) ➞ 180

    convert(2) ➞ 120
*/

//  Solution

function convert(minutes) {
	return 60 * minutes;
}