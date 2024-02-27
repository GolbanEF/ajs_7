import Validator from '../js/Validator.js';

test('username ok', () => {
  const user = new Validator('evgeny44_golb-ru');
  expect(user.validateUsername()).toBe('ok');
});

test('username not ok', () => {
  const user = new Validator('evgeny44@golb');
  expect(user.validateUsername()).toBe('username not valid');
});

test('username ^[-|_|\\d]', () => {
  const user = new Validator('-evgeny44_golb-ru');
  expect(user.validateUsername()).toBe('username not valid');
});

test('username [-|_|\\d]$', () => {
  const user = new Validator('evgeny44_golb-ru1');
  expect(user.validateUsername()).toBe('username not valid');
});

test('username \\d{3,}', () => {
  const user = new Validator('evgeny144_golb-ru');
  expect(user.validateUsername()).toBe('ok');
});

test('username \\d{4,}', () => {
  const user = new Validator('evgeny4144_golb-ru');
  expect(user.validateUsername()).toBe('username not valid');
});