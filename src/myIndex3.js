function check(str, bracketsConfig) {

  const strToArr = str.split('')

  console.log('strToArr', strToArr)

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

  // console.log('OPEN_BRACKETS', OPEN_BRACKETS)
  // console.log('CLOSE_BRACKETS', CLOSE_BRACKETS)
  // brackets pair dictionary

  console.log('BRACKETS_PAIR', BRACKETS_PAIR)

  let stack = []
  // let firstRun = []
  let lastChar = strToArr[0]

  stack.push(strToArr[0])

  console.log('stack push first str element', stack)

  console.log('str.length', str.length)

  strToArr.forEach((el, i) => {
    console.log(i)
    let currentChar = strToArr[i + 1]
    console.log('currentChar', currentChar)

    // check if current char is opening char
    if (OPEN_BRACKETS.includes(currentChar) && lastChar !== currentChar) {
      console.log('it is opening char -> put it in stack')
      stack.push(currentChar)
      console.log('stack', stack)
    }
    // check if stack is not empty -> if it is not -> move to stack is not empty case
    else {
      if (stack.length === 0) {
        console.log('stack is empty and it is a closing char')
        return false
      }

      // stack is not empty case
      console.log('stack is not empty and checking pair', lastChar, currentChar)
      let topStackEl = stack[stack.length - 1]
      console.log('top of stack', topStackEl)

      console.log('open pair is', BRACKETS_PAIR[currentChar] + ` for currentChar ${currentChar}`)
      console.log('')
      if (BRACKETS_PAIR[currentChar] === topStackEl) {
        let removedFromStack = stack.pop()
        console.log('removedFromStack -> pair', removedFromStack, currentChar)
      }
      // if current char pair is wrong
      else {
        return false
      }
    }

    lastChar = currentChar
    console.log('last char', lastChar)

    // // check if stack elenments are odd
    // if (stack.length % 2 !== 0) {
    //   return false
    // }
    // // -> check same elements only left
    // if (stack.every(() => {

    // })) {
    //   for (let i in stack) {
    //     stack.pop()
    //   }
    // }
    // < - extra check
    // console.log('stack', stack)
  })
  return stack.length === 0
}

console.log(check('77885|6||', [['7', '8'], ['5', '6'], ['9', '9'], ['|', '|']]))



  // const OPEN_BRACKETS = []

  // const CLOSE_BRACKETS = []

  // const BRACKETS_PAIR = {}

  // for (let innerArr of bracketsConfig) {
  //   // console.log('innerArr[0]', innerArr[0])
  //   OPEN_BRACKETS.push(innerArr[0])
  //   // console.log('innerArr[1]', innerArr[1])
  //   CLOSE_BRACKETS.push(innerArr[1])
  // }

  // for (let i in OPEN_BRACKETS) {
  //   // console.log('i', i)
  //   BRACKETS_PAIR[[CLOSE_BRACKETS[i]]] = OPEN_BRACKETS[i]
  // }

  // // console.log('OPEN_BRACKETS', OPEN_BRACKETS)
  // // console.log('CLOSE_BRACKETS', CLOSE_BRACKETS)
  // // brackets pair dictionary

  // console.log('BRACKETS_PAIR', BRACKETS_PAIR)

  // let stack = []

  // for (let char of str) {

  //   let currentChar = char
  //   console.log('currentChar', currentChar)

  //   // check if current char is opening char
  //   if (OPEN_BRACKETS.includes(currentChar)) {
  //     console.log('it is opening char -> put it in stack')
  //     console.log('stack', stack)
  //     stack.push(currentChar)
  //   }
  //   // check if stack is not empty -> if it is -> not move to stack is not empty case
  //   else {
  //     if (stack.length === 0) {
  //       console.log('stack is empty and it is a closing char')
  //       return false
  //     }

  //     // stack is not empty case
  //     let topStackEl = stack[stack.length - 1]
  //     console.log('topStackEl', topStackEl)
  //     console.log('BRACKETS_PAIR[currentChar]', BRACKETS_PAIR[currentChar])
  //     console.log('')
  //     if (BRACKETS_PAIR[currentChar] === topStackEl) {
  //       stack.pop()
  //     }
  //     // if current char pair is wrong
  //     else {
  //       return false
  //     }
  //   }
  //   console.log('stack after', stack)

  // }

  // return stack.length === 0