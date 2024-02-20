import Validator from './Validator.js';

const user1 = new Validator('user_evgeny44ru');
const user2 = new Validator('user666@bazinga.ru');

console.log(user1.validateUsername());
console.log(user2.validateUsername());