const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

const example = {
  order: 0,
  name: '강지민'
}

let makeWhat = ['americano', 'espresso', 'latte', ];
let bean = [20, 30, 20]
let liquid = [200, 0, 180];

let id = [
  'aaa1234',
  'aaa',
  'abcdef',
  'abc123',
  'likehate',
  'dddabcd',
  '2223444',
  'aaaagggg'
]
// 객체 리턴 방식
function makerObject(order, name) {
  if(typeof(order) === 'number') {
    return {
      order: order,
      name: name
    }
  }
  else {
    console.error('order는 숫자형이어야 합니다.')
  }
}

// 생성자 함수 방식
function makerConstruct(order, name) {
  this.order = order;
  this.name = name;

  function order(order) {
    if(typeof(order) === 'number') {
      return this._order;
    }
  }
}

class User {
  constructor(order, email) {
    this.order = order;
    this.email = email;
    // this.name = name;
  }
  // set name(index) {
  //   if(typeof(index) === 'number') {
  //     console.log('숫자입니다.');
  //   }
  //   this._cute = index;
  // }
  set email(str) {
    // if(typeof(index) === 'number') {
    //   console.log('숫자입니다.');
    // }
    this._email = str.split("@")[1];
  }
}
let a = new User('abc', 'gudwl@com');
console.log(a);

a.name = 123;
a.name = 456;

class americanoMaker {
  constructor(makeWhat, bean, liquid) {
    this.makeWhat = makeWhat;
    this.bean = bean;
    this.liquid = liquid;
  }
  set makeWhat(makeWhat) {
    if(liquid > 0) {
      this._makeWhat = makeWhat;
    }
  }
}

class idIdentify {
  constructor(index, id) {
    this.index = index
    this.id = id;
  }
  set id(id) {
    // d+는 1개이상의 숫자로 된 문자 1개이상인 문자열 /g는 모든 패턴
    for(let i = 0; i < id.length; i++) {
      if(id[i].length > 6 && id[i].match(/\d+/g).length > 1 && id[i].length > 1) {
        this._id = id;
      }
    }
  }
}

// console.log(id.length);
// let idArr = [];
// id.forEach((index, id) => {
//   idArr.push(new idIdentify(index, id));
// });

// console.log(idArr);

// let cf = [];
// cf.push(new americanoMaker(makeWhat, bean, liquid));
// console.log(cf);



// let test = [];
// studentList.forEach((student, index) => {
//   test.push(new User(index, student));
// })

// console.log(test);