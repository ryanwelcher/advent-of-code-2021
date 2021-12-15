import { example, data } from './input'

export const inputParser = (input) => input.split('\n').map( item => item.split('').map(Number) );

const parsedData = inputParser(example)

export const part1 = (input = parsedData) => {
  let zeroCount = [];
  let oneCount  = [];

  for( let i = 0; i < input.length; i++ ) {

    for (let j = 0; j < input[i].length; j++) {
      switch(input[i][j]) {
        case 1:
          oneCount[j] = oneCount[j] + 1 || 1;
        break;
        default:
          zeroCount[j] = zeroCount[j] + 1 || 1;
      }
    }
  }

  const gammaArray = zeroCount.map( ( item, i ) => {
    return oneCount[i] > item ? 1 : 0
  })
  const epsilonArray = zeroCount.map( ( item, i ) => {
    return oneCount[i] < item ? 1 : 0
  })

  const gammaValue = parseInt( Number( gammaArray.join('') ), 2 );
  const epsilonValue = parseInt( Number( epsilonArray.join('') ), 2 );

  return gammaValue * epsilonValue;
}

export const part2 = (input = parsedData) => {
  return
}

export default {
  part1,
  part2,
}
