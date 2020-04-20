/**
 *  Convert Hours and Minutes into Seconds
 *  ======================================
 */

/*
    #language_fundamentals # maths
    ------------------------------

    Write a function that takes two integers (hours, minutes) and converts them into seconds.

    Examples:

    convert(1, 3) ➞ 3780

    convert(2, 0) ➞ 7200

    convert(0, 0) ➞ 0

    Notes:
    - Don't forget to return the result.
    - If you get stuck on a challenge, find help in the Resources tab.
    - If you're really stuck, unlock solutions in the Solutions tab.
*/

//  Solution

function convert(hours, minutes) {
    return (hours * 3600) + (minutes * 60);
}