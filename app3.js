import fs from 'fs';

function user(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
}

const d = new user('aaa1234', '1234', 'aaa@aaa.com');
const e = new user('bbb1234', '1234', 'bbb@bbb.com');
const f = new user('ccc1234', '1234', 'ccc@ccc.com');

let names = ['aaa1234', 'bbb1234', 'ccc1234'];
let passwords = ['1234', '1234', '1234'];
let emails = ['aaa@aaa.com', 'bbb@bbb.com', 'ccc@ccc.com'];
let members = [];

for(let i = 0; i < 3; i++) {
  members.push(new user(names[i], passwords[i], emails[i]));
}

fs.writeFileSync('members.JSON', JSON.stringify(members, null, 0), 'utf-8');

console.log(members);
