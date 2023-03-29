module.exports = function searching(name) {
  for(let i = 0;i < studentList.length; i++) {
    if(studentList[i] === name) {
      console.log(i);
    }
    else {
      console.log(`해당 순서는 ${name}씨가 아닙니다.`);
    }
  }
}

//esm방식

// export default function searching(name) {
//   for(let i = 0;i < studentList.length; i++) {
//     if(studentList[i] === name) {
//       console.log(i);
//     }
//     else {
//       console.log(`해당 순서는 ${name}씨가 아닙니다.`);
//     }
//   }
// }