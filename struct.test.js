const { Stack, Queue } = require('./struct');

test('Stack', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.pop()).toBe(2);
  expect(s.pop()).toBe(1);
  expect(s.pop()).toBe(undefined);
});

test('Queue', () => {
  const s = new Queue();
  s.push(1);
  s.push(2);
  expect(s.pop()).toBe(1);
  expect(s.pop()).toBe(2);
  expect(s.pop()).toBe(undefined);
});
