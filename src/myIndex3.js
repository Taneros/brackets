function check(str, bracketsConfig) {

  // const strToArr = str.split('')

  // console.log('strToArr', strToArr)

  // loop through inner arrays of bracketsConfig to check for odd 


  // describe open brackets
  //  -> place odd lements from brackets config here

  const OPEN_BRACKETS = []

  const CLOSE_BRACKETS = []

  const BRACKETS_PAIR = {}

  for (let innerArr of bracketsConfig) {
    // console.log('innerArr[0]', innerArr[0])
    OPEN_BRACKETS.push(innerArr[0])
    // console.log('innerArr[1]', innerArr[1])
    CLOSE_BRACKETS.push(innerArr[1])
  }

  for (let i in OPEN_BRACKETS) {
    // console.log('i', i)
    BRACKETS_PAIR[[CLOSE_BRACKETS[i]]] = OPEN_BRACKETS[i]
  }

  // let k = ['a', 'b', 'c']

  // let obj = k.reduce(function (acc, curr) {
  //   acc[curr] = '';
  //   return acc;
  // }, {});



  console.log('OPEN_BRACKETS', OPEN_BRACKETS)
  console.log('CLOSE_BRACKETS', CLOSE_BRACKETS)
  console.log('BRACKETS_PAIR', BRACKETS_PAIR)

  // brackets pari dictionary


  let stack = []

  for (let char of str) {

    let currentChar = char
    console.log('currentChar', currentChar)

    // check if current char is opening char
    if (OPEN_BRACKETS.includes(currentChar)) {
      console.log('it is opening char -> put it in stack')
      console.log('stack', stack)
      stack.push(currentChar)
    }
    // check if stack is not empty -> if it is -> not move to stack is not empty case
    else {
      if (stack.length === 0) {
        console.log('stack is empty and it is a closing char')
        return false
      }

      // stack is not empty case
      let topStackEl = stack[stack.length - 1]
      console.log('topStackEl', topStackEl)
      console.log('BRACKETS_PAIR[currentChar]', BRACKETS_PAIR[currentChar])

      if (BRACKETS_PAIR[currentChar] === topStackEl) {
        stack.pop()
      }
      // if current char pair is wrong
      else {
        return false
      }
    }
    console.log('stack after', stack)
  }

  return stack.length === 0
}

console.log(check('787878789', [['7', '8'], ['9', '10']]))