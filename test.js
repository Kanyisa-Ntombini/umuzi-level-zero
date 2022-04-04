function testFunc() {
  console.log(arguments);
}
testFunc(10,11,12);
//console.log(testFunc(10,11,12));

/*function func() {
  console.log(arguments);
  /*let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum)
  return sum;
}
func(3, 4, 7); // 14
func(3, 4, 7, 10, 20); // 44
func(3, 4, 4, 8); // 19*/