/* @flow */
import R from 'ramda';

// math
R.add(2, 3);
R.add(2, 3, 1, 2, 3 ,4);
R.add(7)(10);
R.dec(42);
R.inc(42);
R.divide(71, 100);
R.mathMod(10, 3);
R.mean([2, 7, 9])
R.mean([]) === NaN;
R.median([2, 9, 7]);
R.median([7, 2, 10, 9]);
R.median([]) === NaN;
R.modulo(17, 3);
const double = R.multiply(2);
double(2) === 4;
R.negate(42);
R.product([2, 4, 6, 8, 100, 1]);
R.subtract(10, 8);
R.subtract(17)(30);
R.sum([2, 4, 6, 8, 100, 1]);

// $FlowFixMe
R.dec('a');
R.add(1)('a');
// $FlowFixMe
R.mean(1);
R.sum([1,2,'a']);

// logic
type Card = {
  rank: string;
  suit: string;
};

const isQueen = (card: Card) => card.rank === 'Q';
const isSpade = (card: Card) => card.suit === '♠︎';
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

// $FlowFixMe
const isQueen2 = (card: Card) => card.rank;
const isQueenOfSpades2 = R.allPass([isQueen2, isSpade]);
