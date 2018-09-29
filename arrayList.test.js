const ArrayList = require('./arrayList')

let list = new ArrayList();

test('push', () => {
  list.push(5);
  expect(list.data[0]).toBe(5);
})

test('pop', () => {
  list.push(6);
  expect(list.pop()).toBe(6);
})