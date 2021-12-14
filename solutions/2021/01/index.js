import { data } from './input'

export const inputParser = (input) => input.split('\n').map(Number)

const parsedData = inputParser(data)

export const part1 = (input = parsedData) => {
  let increased = 0;

  input.reduce( ( val, element ) => {
    if( element > val ) {
      increased++;
    }
    return element
  }, input[0]);
  
  return increased;
}

export const part2 = (input = parsedData) => {

  let lastSet = input[0] + input[1] + input[2];
  let increased = 0;


  for( let i = 0; i < input.length; i++ ) {
    let nextSet = input[i] + input[i + 1] + input[i + 2];
    if ( lastSet < nextSet ) {
      increased++;
    }
    lastSet = nextSet;

  }
  return increased;
}

export default {
  part1,
  part2,
}
