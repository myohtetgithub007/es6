function map() {
  let num = [1, 2, 3, 4, 5];
  let result = num.map(function (n) {
    return n + 1;
  });
  console.log(result);
}
/* map function how is work

copy array crate new array eg ((result array)) is new

*/
function filter() {
  let num = [1, 2, 3, 4, 5];
  let result = num.filter(function (num) {
    if (num % 2 == 0) {
      return num;
    }
  });
  console.log(result);
}
