function validBraces(braces){
  const open = []
  const caracters = braces.split("")
  const mat = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  console.log("ola")

  for (let i = 0; i < caracters.length; i++) {
    if ([")", "]", "}"].includes(caracters[i]) && open.length <= 0) {
      return false
    }

    if (["(", "[", "{"].includes(caracters[i])) {
      open.push(caracters[i])
      continue
    }

    if (!(open[open.length - 1] === mat[caracters[i]])) {
      return false
    }

    open.pop()
  }

  return open.length === 0
}

console.log(validBraces("({})[({})]"))
console.log(validBraces("(}"))
console.log(validBraces("(((({{"))
