// const itsMe = {
//   firstname: 'Jiseop',
//   lastname: 'Kim',
//   age: 0,
//   email: 'jsub5646@gmail.com',
//   phone: '01065533723',
//   address: 'Daejeon',
//   like: 'shoes',
//   hate: 'bug',
//   hobby: 'shopping',
//   coffee: 'americano',
//   food: 'pizza',
//   sleepTime: '0am',
// }

function personal(firstname, lastname, age, email, phone, address, like, hate, hobby, coffee, sleepTime) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.like = like;
  this.hate = hate;
  this.hobby = hobby;
  this.coffee = coffee;
  this.sleepTime = sleepTime;

}
// 생성자 함수

let itsMe = new personal('Jiseop','Kim', 0, 'jsub5646@gmail.com', '01065533723','Daejeon', 'shoes',)