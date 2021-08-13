function check(str, bracketsConfig) {

  const strToArr = str.split('')

  console.log('strToArr', strToArr)

  // loop through inner arrays of bracketsConfig to check for odd 

  for (let arr of bracketsConfig) {
    console.log('arr inside BC array', arr)
    // loop through elements of bracketsConfig inner arr 

    let evenOdd = 0

    // take each element of inner array and filter the str then count even odd -> if odd return false
    arr.forEach(el => {

      // console.log('el of arr in brackets config', el)

      let filteredChar = strToArr.filter(strEl => el === strEl)

      // console.log('filteredChar', filteredChar)

      evenOdd += filteredChar.length
    });

    // console.log('evenOdd', evenOdd)

    if (evenOdd % 2 !== 0) return false

  }

  for (let arr of bracketsConfig) {

    if (strToArr.indexOf(arr[0]) === 0 && (strToArr.indexOf(arr[1]) - strToArr.indexOf(arr[0])) % 2 === 0) return false

    console.log('strToArr.indexOf(arr[0])', strToArr.indexOf(arr[0]))

    console.log('strToArr.lastIndexOf(8)', strToArr.lastIndexOf(arr[1]))

  }
  return true

}

// 7788 [[7,8]]

console.log(check('78787877', [['7', '8']]))


// console.log(check('433434', [['1', '2'], ['3', '4']]))

// console.log(check('((([{)}])))', [['(', ')'], ['[', ']'], ['{', '}']]))

// console.log(check('77778887878787879', [['7', '8'], ['8', '9']]))

// 77778887878787879



// *********
/**
 *
 *
 * 1  2  3  4  5 [5]
 * [  ]  (  )  (
 *
 *
 * 1 2 3 4 5 6 7 8 [8]
 * ( ( { [ ] } ) )
 *
 * 1 2 3 4 5 6 [6]
 * a c a c e a
 *
 * 1 2 [2 total]
 * ( )   potision of closing bracket is
 * o e
 *
 *
// ****** example with 4
 * 1 2 3 [4 total]
 * ( [ ) ] - wrong
 * o e o e
 *   ^
 *
 * 1 2 3 4 [4 total]
 * ( [ ] ) - correct
 * o e o e
 *
 * even open bracket has to be closed on odd place -> otherwise false
 *
 * 1 2 3 4 [4 total]
 * ( ) [ ] - correct
 * o e o e
 *
 * odd open bracket has to be closed on even place -> otherwise false
 *
//  *********************

 *
//  ********* with 6 elements
 * 1 2 3 4 5 [6 total]
 * ( ( [ ) ] ) - wrong
 * o e o e o e
 *
 * 1 2 3 4 5 6 [6 total]
 * ( ( [ ] ) ) - correct
 * o e o e o e
 *
 * 1 2 3 4 5 [6 total]
 * ( ( [ ) ] ) - wrong
 * o e o e o e
//  ************

 *
 *
 * check('((()))()', [['(', ')']]) // -> true
 *
 * 1 2 3 4 5 6 7 8 [8]
 * ( ( ( ) ) ) ( ) - correct
 * o e o e o e o e
 *
 *
 * 1 2 3 4 5 6 7 8 [8]
 * ( ( ) ) ) ) ( ) - wrong
 * o e o e o e o e
 *
 *
 *
 *
 *
 *
 */




//  // check first chaacter
//       const filterFn = strToArr.filter((elOfstrArr, indxOfstrArr) => {



//         return elOfstrArr === elmOfinnerArr

//         // console.log('elmOfinnerArr', elemOfinnerArr, 'elOfstrArr', elOfstrArr, 'index of ele of str arr', indxOfstrArr)

//       })


      // console.log('filterFn', filterFn)




      // check if bracketsConfig has a character that is not in string
      // if (filteredChar.length === 0) {
      //   console.log('filteredChar.length===0')
      //   return false
      // }


  // check right away if first symbol is wrong: ] } or )
  // const onlyKeysArr = [...strToArr]
    // console.log('onlyKeysArr[0]', onlyKeysArr[0])

  // switch (onlyKeysArr[0]) {
  //   case ')':
  //     return false
  //   case ']':
  //     return false
  //   case '}':
  //     return false
  //
