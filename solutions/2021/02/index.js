import { example, data } from './input'

export const inputParser = (input) => input.split('\n')

const parsedData = inputParser(example)

export const part1 = (input = parsedData) => {
  let hPos = 0;
  let depth = 0;

  input.map( item => {
    const [ direction, amount ] = item.split(' ');

    switch (direction) {
      case 'forward':
        hPos += Number(amount);
        break;
      case 'up':
        depth -= Number(amount);
        break;
      case 'down':
        depth += Number(amount);
        break;
      default:
    }
  });

  return hPos * depth
}

export const part2 = (input = parsedData) => {
  let hPos = 0;
  let depth = 0;
  let aim = 0

  input.map( item => {
    const [ direction, amount ] = item.split(' ');

    switch (direction) {
      case 'forward':
        hPos += Number(amount);
        depth += (aim * Number(amount))
        break;
      case 'up':
        aim -= Number(amount);
        break;
      case 'down':
        aim += Number(amount);
        break;
      default:
    }
  });
  return hPos * depth;
}

export default {
  part1,
  part2,
}
