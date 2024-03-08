function number(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push("*");
  }
  for (let i = num; i > 0; i--) {
    console.log(array.join(''))
    array.splice(1,1)
  }
}
number(5);
