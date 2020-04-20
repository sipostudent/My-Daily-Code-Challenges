/**
 *  Count Syllables
 *  ===============
 */

/*
    #language_fundamentals #strings
    -------------------------------

    Create a function that counts the number of syllables a word has.
    Each syllable is seperated with a dash.

    Examples:

    numberSyllables("buf-fet") ➞ 2

    numberSyllables("beau-ti-ful") ➞ 3

    numberSyllables("mon-u-men-tal") ➞ 4

    numberSyllables("on-o-mat-o-poe-ia") ➞ 6
*/

//  Solution

function numberSyllables(word) {
    let words;
    words = word.split("-");
    return words.length;
}

// Another Solution

function numberSyllables(word) {
	return word.split("-").length;
}

/*
    Tests:

    Test.assertEquals(numberSyllables("buf-fet"), 2)
    Test.assertEquals(numberSyllables("beau-ti-ful"), 3)
    Test.assertEquals(numberSyllables("mon-u-men-tal"), 4)
    Test.assertEquals(numberSyllables("on-o-mat-o-poe-ia"), 6)
    Test.assertEquals(numberSyllables("o-ver-ly"), 3)
    Test.assertEquals(numberSyllables("pas-try"), 2)
    Test.assertEquals(numberSyllables("flu-id"), 2)
    Test.assertEquals(numberSyllables("syl-la-ble"), 3)
*/
