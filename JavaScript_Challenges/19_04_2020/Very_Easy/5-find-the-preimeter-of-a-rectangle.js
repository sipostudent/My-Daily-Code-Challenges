/**
 *  Find the Perimeter of a Rectangle
 *  =================================
 */

/*
    language_fundamentals - maths - numbers
    ---------------------------------------
    
    Create a function that takes `height` and `width` and finds the perimeter of a rectangle

    Examples:

    findPerimeter(6, 7) ➞ 26

    findPerimeter(20, 10) ➞ 60

    findPerimeter(2, 9) ➞ 22

    Notes:

    - Don't forget to return the result.
    - If you're stuck, find help in the Resources tab.
    - If you're really stuck, find solutions in the Solutions tab.
*/

// Solution

function findPerimeter(height, width) {
	return (height * 2) + (width * 2);
}

/*
    Solution Formula:
    
    To find the perimeter of a rectangle, add the lengths of the rectangle's four sides. 
    If you have only the width and the height, then you can easily find all four sides 
    (two sides are each equal to the height and the other two sides are equal to the width). 
    Multiply both the height and width by two and add the results.
*/