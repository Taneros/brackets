
function check(str, bracketsConfig) {

  const strToArr = str.split('')

  console.log('str.length', str.length)

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

  for (let i = 1; i <= strToArr.length - 1; i++) {

    console.log('str index', i)
    let currentChar = strToArr[i]
    // if (currentChar === undefined) { break }
    console.log('currentChar', currentChar)
    let topStackEl = stack[stack.length - 1]
    console.log('top stack el', topStackEl)
    if (stack.length !== 0) {
      if (BRACKETS_PAIR[currentChar] === topStackEl) {
        console.log('stack pop ->', currentChar)
        stack.pop()
      }
      else {
        console.log('stack push <-')
        stack.push(currentChar)
      }
    }
    else {
      console.log('stack push <-')
      stack.push(currentChar)
    }
    console.log('stack', stack)
  }
  return stack.length === 0 ? true : false
}

console.log(check('76877856||', [['7', '8'], ['5', '6'], ['9', '9'], ['|', '|']]))