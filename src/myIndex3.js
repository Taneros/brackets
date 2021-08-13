function check(str, bracketsConfig) {

  // const strToArr = str.split('')

  // console.log('strToArr', strToArr)

  // loop through inner arrays of bracketsConfig to check for odd 


  // describe open brackets
  //  -> place odd lements from brackets config here
  const OPEN_BRACKETS = ['7']

  // brackets pari dictionary
  const BRACKETS_PAIR = {
    ['8']: '7',
    ['9']: '8',
  }


  let stack = []

  for (let char of str) {

    console.log('char', char)
    let currentChar = char

    // check if OPEN_BRACKETS contain current char form str
    if (OPEN_BRACKETS.includes(currentChar)) {
      stack.push(currentChar)
    }
    // check if stack is not empty -> if it si not move to stack is not empty case
    else {
      if (stack.length === 0) {
        return false
      }

      // stack is not empty case
      let topStackEl = stack[stack.length - 1]

      if (BRACKETS_PAIR[currentChar] === topStackEl) {
        stack.pop()
      }
      // if current char pair is wrong
      else {
        return false
      }
    }
    console.log('stack', stack)
  }

  return stack.length === 0
}

console.log(check('78787878', [['7', '8']]))