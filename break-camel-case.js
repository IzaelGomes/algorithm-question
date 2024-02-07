function solution(string) {

 return [...string].map((word) => word === word.toUpperCase() ? ` ${word}` : `${word}`).join("")

}

