function check(str, bracketsConfig) {

  // convert string argument to array
  const strToArr = str.split('')

  // if (strToArr.length % 2 !== 0) return false

  console.log('strToArr', strToArr)

  // check right away if first symbol is wrong ] } or )
  const onlyKeysArr = [...strToArr]

  console.log('onlyKeysArr[0]', onlyKeysArr[0])

  switch (onlyKeysArr[0]) {
    case ')':
      return false
    case ']':
      return false
    case '}':
      return false
  }

  // make a dictionary from array to count how many repeating keys are there using Object.values(obj)

  const objForStrToArr = strToArr.reduce((acc, el) => {
    if (acc[el]) {
      acc[el] += 1
    } else {
      acc[el] = 1
    }
    return acc
  }, {})

  console.log('objForStrToArr', objForStrToArr)


  // arr of arrays check 
  const bracketsConfigAllInOneArr = [...bracketsConfig]

  console.log('bracketsConfig', bracketsConfig)


  // make dictionary from bracketsConfig

  const objForbracketsConfig = bracketsConfig.forEach(ele => {
    console.log('ele', ele)
    const obj = ele.reduce((acc, el) => {
      el = acc[el] = 1
      return acc
    }, {})
    return obj
  })

  console.log('objForbracketsConfig', objForbracketsConfig)

}


console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]))

/**
 *
 * bracketsConfig {
 *
 * 1: []
 *
 *
 * }
 *
 *
 *
 *
 *
 * use reduce to calculate elements ?
 * use regex on str ?
 * use regex on array ?
 *
 *
 *
 *
 */



// ********************************************

// // convert string argument to array
//   const strToArr = str.split('')

//   if (strToArr.length % 2 !== 0) return false

//   console.log('strToArr', strToArr)

//   // make a dictionary from array to count how many repeating keys are there using Object.values(obj)

//   const objForStrToArr = strToArr.reduce((acc, el) => {
//     if (acc[el]) {
//       acc[el] += 1
//     } else {
//       acc[el] = 1
//     }
//     return acc
//   }, {})

//   console.log('objForStrToArr', objForStrToArr)

//   // add all calues upp to see if they are even

//   const strCounted = Object.values(objForStrToArr).reduce((acc, el) => acc + el, 0)

//   console.log('counted str', strCounted)

//   // function to check if open brackets are closed

//   function openIsClosed(arr) {

//     // console.log('arr came into open is closed function', arr)

//     const onlyKeysArr = [...arr]

//     // console.log('onlyKeysArr', arr)


//     switch (onlyKeysArr[0]) {
//       case '(':
//         if (onlyKeysArr[onlyKeysArr.length - 1].charCodeAt(0) === 41) return true
//       case ')':
//         return false
//       case '|':
//         if (onlyKeysArr[0] === onlyKeysArr[onlyKeysArr.length - 1]) return true
//       case ']':
//         return false
//       case '[':
//         if (onlyKeysArr[onlyKeysArr.length - 1].charCodeAt(0) === 93) return true
//       case typeof onlyKeysArr[0] === 'number':
//         console.log('a', a)
//       default:
//         if (onlyKeysArr[0] === onlyKeysArr[onlyKeysArr.length - 1]) { return true }
//         else { return false }
//     }
//   }


//   // arr of arrays check 
//   // const bracketsConfigAllInOneArr = [...bracketsConfig]

//   // console.log('bracketsConfig', bracketsConfig)



//   // return final resultw
//   return openIsClosed(strToArr)

// ********************************************














// const filteredStrToArr = strToArr.filter((el) => {
//   console.log('element in strToArr', el)
//   if (el)
//   })



  // console.log('strToArr', strToArr)
  // const objForStrToArr = strToArr.reduce((acc, el) => {
  //   if (acc[el]) {
  //     acc[el] += 1
  //   } else {
  //     acc[el] = 1
  //   }
  //   return acc
  // }, {})



//   let sortedArr = str.reduce((acc, elem) => {
//     if (acc[elem]) { acc[elem] += 1 }
//     else {
//       acc[elem] = 1
//     }
//     return acc
//   }, {})

//   console.log('sortedArr', sortedArr)

// }



