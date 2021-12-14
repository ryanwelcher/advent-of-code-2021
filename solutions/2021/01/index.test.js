const { inputParser, part1, part2 } = require('./index.js')
const { example, data } = require('./input.js')

test('part 1 passes', () => {
  expect(part1(inputParser(example))).toBe(7);
  expect(part1(inputParser(data))).toBe(1655);
})

test('part 2 passes', () => {
  expect(part2(inputParser(example))).toBe(5)
  expect(part2(inputParser(data))).toBe(1683)
})

