const evalbuilder = require('../src');
it('should work with integers as input', () => {

  expect(evalbuilder.sum(1, 2, 3, 4)).toBe('sum(1,2,3,4)');
})
it('should work with strings as input', () => {

  expect(evalbuilder.print('hey', "my", "name"))
  .toBe('print("hey","my","name")');
})
it('should work with array as input', () => {

  expect(evalbuilder.print([1,2,3,4,10,200,2.5,'hey',{w:3,a:{a:[1,2,3]}}]))
  .toBe('print([1,2,3,4,10,200,2.5,"hey",{"w":3,"a":{"a":[1,2,3]}}])');
})
it('should work with json as input', () => {

  expect(evalbuilder.print({"a":[1,2,3],"w":3,"z":{"a":"aaaa"}}))
  .toBe('print({"a":[1,2,3],"w":3,"z":{"a":"aaaa"}})');
})
it('should work with json as input', () => {

  expect(evalbuilder.print({"a":[1,2,3],"w":3,"z":{"a":"aaaa"}}))
  .toBe('print({"a":[1,2,3],"w":3,"z":{"a":"aaaa"}})');
})
