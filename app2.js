function c(a, b, c) {
  // return {
  //   year: year,
  //   month: month,
  //   day: day,
  // }
  this.year = a;
  this.month = b;
  this.day = c;
}

const test = c(2023, 3, 29).year;
console.log(test);

// const b = {
//   year: 2023,
//   month: 3,
//   day: 29
// }