var assert = require('assert');

// write a function that reverses a string
// example:
// reverseString("abc") -> "cba"
// reverseString("racecar") -> "racecar"
// reverseString("rtyui") -> "iuytr"
const reverseString = (assert) => {
  return assert.split('').reverse().join('');
};

/* write a function that takes a number as an argument
 * and returns 'cookie!' if it's odd and 'Ice cream!' if
 * it's even
 * cookieIcecream(1) -> 'cookie!'
 *cookieIcecream(6) -> 'Ice cream!'*/

const cookieIcecream = (num) => {
  if (num % 2 === 0) {
    return 'Ice cream!';
  } else {
    return 'cookie!';
  }
};

const items = ['horse', 'what', 'lily', 'cindy', 'great', 'manu'];
/* write a function that takes an index as an argument
 * and, using the above array, gets the item at that index
 * example:
 * getItem(1) -> 'what'
 * getItem(3) -> 'cindy'
 */
const getItem = (index) => {
  return items[index];
};

const car = {
  year: '1996',
  style: 'dope',
  color: 'pink',
};

/* write a function that takes a property as a parameter
 * and, using the above object, gets that property from it
 * example:
 * car('year') -> '1996'
 * car('color') -> 'pink'
 */
const getProperty = (property) => {
  return car[property];
};

const recipes = [
  {
    name: 'cake',
    time: '2',
    timeUnit: 'hours',
  },
  {
    name: 'curry',
    time: '6',
    timeUnit: 'hours',
  },
  {
    name: 'cereal',
    time: '1',
    timeUnit: 'minute',
  },
];

/* write a function that takes an index as the first argument
 * and a property as the second argument and, using the recipes
 * array, gets the property at that index and key
 * example:
 * getRecipeProp(1, 'name') -> 'curry'
 * getRecipeProp(0, 'time') -> 2
 */
const getRecipeProp = (index, property) => {
  const recipeIndex = recipes[index];
  return recipeIndex[property];
};

/* write a function that receives an array of numbers and returns
 * and array with only odd numbers
 * example:
 * onlyOdd([1,2,3,4,5]) -> [1,3,5]
 *
 * also, the below function declaration is the same as:
 * const onlyOdd = () => {}
 */

// [1,2,3,4,5]

// function onlyOdd(array) {
//   const oddNumbers = [];

//   for (let i = 0; i < array.length; i++) {
//     const currentNum = array[i];
//     if (currentNum % 2 !== 0) {
//       oddNumbers.push(currentNum);
//     }
//   }
//   return oddNumbers;
// }

// write a function that returns only the albums that have an odd year
/*  const albums = [{
   name: 'rubber soul',
   year: 1964,
  }, {
   name: 'the velvet underground',
    year: 1967,
  }]
 oddYearAlbums(albums) -> [{
    name: 'the velvet underground',
    year: 1967,
 }]
 */

const oddYearAlbums = (albums) => {
  console.log('albums', albums);

  const OddYears = albums.filter((albums) => {
    console.log('albums.year', albums.year);
    return albums.year % 2 !== 0;
  });
  return OddYears;
};

/* write a function that is the same as the only odd one above,
 * but users filter
 * example:
 * onlyOddFilter([1,2,3,4,5]) -> [1,3,5]
 */
const onlyOddFilter = (arr) => {
  const OddNums = arr.filter((num) => {
    console.log('arr', arr);
    console.log('number', num);
    return num % 2 !== 0;
  });
  return OddNums;
};

/* write a function that is the same as oddYearAlbums above,
 * but does not use filter
 * const albums = [{
      name: 'rubber soul',
      year: 1964,
      }, {
      name: 'the velvet underground',
        year: 1967,
      }]
    oddYearAlbums(albums) -> [{
        name: 'the velvet underground',
        year: 1967,
    }]
 */
const oddYearAlbumsNoFilter = (albums) => {
  const OnlyTheOdds = [];
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    console.log('albums[i]', albums[i]);
    console.log('album', album);
    console.log('album.year', album.year);
    if (album.year % 2 !== 0) {
      OnlyTheOdds.push(album);
    }
    console.log('the only odds', OnlyTheOdds);
  }
  return OnlyTheOdds;
};

/* write a function that takes in an array and an entry,
 * and tells you how many times that entry occurs in the array
 * example:
 * searchEntry([1, 'apple', 2, 'apple', 'pear'], 'apple') -> 2
 */
const searchForEntry = (arr, entry) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const trueEntry = arr[i];
    if (entry === trueEntry) {
      console.log('count', count);
      count++;
      console.log('count', count);
    }
  }
  return count;
};

/*
 * Write a simple calculator that takes 3 inputs: the first number, the second number, and an operator
 * The operator can be +, -, or *
 * calculate(2, 2, '+') -> 4
 * calculate(5, 4, '*') -> 20
 * calculate(8, 3, '-') -> 5
 */
const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else {
    return num1 * num2;
  }
};
//loop through array to find every time entry appears
/* example with APPLE:
i[0]= 1 // i[1]= APPLE TRUE! // i[2]= 2 // i[3]= APPLE TRUE! // i[4]= pear
RESULT should be 2

//for every value if it's true that the word matches with entry then

// create variable to store it: trueEntry = entry[i]

if (entry === trueEntry) {increase count by 1}

//create a count and start it at 0
const count = 0;

//THEN add 1 to the count for every time the condition is true
{
  count++;
}
*/
//return count

describe('tests', () => {
  // it('reverse string', () => {
  //   assert.equal(reverseString('abc'), 'cba');
  //   assert.equal(reverseString('racecar'), 'racecar');
  //   assert.equal(reverseString('rtyui'), 'iuytr');
  // });
  // it('cookie icecream', () => {
  //   assert.equal(cookieIcecream(1), 'cookie!');
  //   assert.equal(cookieIcecream(2), 'Ice cream!');
  //   assert.equal(cookieIcecream(1517), 'cookie!');
  //   assert.equal(cookieIcecream(0), 'Ice cream!');
  // });
  // it('gets item at index', () => {
  //   assert.equal(getItem(1), 'what');
  //   assert.equal(getItem(3), 'cindy');
  // });
  // it('gets an property from an object', () => {
  //   assert.equal(getProperty('year'), '1996');
  //   assert.equal(getProperty('color'), 'pink');
  // });
  // it('gets prop', () => {
  //   assert.equal(getRecipeProp(1, 'name'), 'curry');
  //   assert.equal(getRecipeProp(2, 'timeUnit'), 'minute');
  // });
  // it('returns only odd', () => {
  //   assert.deepEqual(onlyOdd([1, 2, 3, 4, 5]), [1, 3, 5]);
  //   assert.deepEqual(onlyOdd([6, 2, 0]), []);
  // });
  // it('returns only odd year albums', () => {
  //   const albums = [
  //     {
  //       name: 'rubber soul',
  //       year: 1964,
  //     },
  //     {
  //       name: 'the velvet underground',
  //       year: 1967,
  //     },
  //   ];
  //   const albums2 = [
  //     {
  //       name: 'nevermind',
  //       year: 1991,
  //     },
  //     {
  //       name: 'a rush of blood to the head',
  //       year: 2004,
  //     },
  //     {
  //       name: 'ilmatic',
  //       year: 1994,
  //     },
  //   ];
  //   assert.deepEqual(oddYearAlbums(albums), [albums[1]]);
  //   assert.deepEqual(oddYearAlbums(albums2), [albums2[0]]);
  // });
  // it('returns only odd with filter', () => {
  //   assert.deepEqual(onlyOddFilter([1, 2, 3, 4, 5]), [1, 3, 5]);
  //   assert.deepEqual(onlyOddFilter([6, 2, 0]), []);
  // });
  // it('returns only odd year albums without filter', () => {
  //   const albums = [
  //     {
  //       name: 'rubber soul',
  //       year: 1964,
  //     },
  //     {
  //       name: 'the velvet underground',
  //       year: 1967,
  //     },
  //   ];
  //   const albums2 = [
  //     {
  //       name: 'nevermind',
  //       year: 1991,
  //     },
  //     {
  //       name: 'a rush of blood to the head',
  //       year: 2004,
  //     },
  //     {
  //       name: 'ilmatic',
  //       year: 1994,
  //     },
  //   ];
  //   assert.deepEqual(oddYearAlbumsNoFilter(albums), [albums[1]]);
  //   // assert.deepEqual(oddYearAlbumsNoFilter(albums2), [albums2[0]]);
  // });
  // it('returns the number of times an entry occured', () => {
  //   assert.equal(searchForEntry([1, 'apple', 2, 'apple', 'pear'], 'apple'), 2);
  //   assert.equal(
  //     searchForEntry(
  //       ['casablanca', 'amadeus', 'django unchained', 'amadeus', 'amadeus'],
  //       'amadeus'
  //     ),
  //     3
  //   );
  // });

  it('simple calculator', () => {
    assert.equal(calculate(2, 2, '+'), 4);
    assert.equal(calculate(5, 3, '-'), 2);
    assert.equal(calculate(4, 5, '*'), 20);
  });
});
