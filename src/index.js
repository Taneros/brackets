module.exports = function check(str, bracketsConfig) {

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
