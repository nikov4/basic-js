const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayD = Array.from(String(n));
  let arrayDel = [];
  let string = '', arrayIndex = '';
  let result = 0;
  Object.freeze(arrayD);
  //console.log(Object.isFrozen(array));
  for (let i = 0; i < arrayD.length; i += 1) {
    //console.log('ArrayConst=', arrayD);
    arrayD.forEach((item) => {
      arrayDel.push(item);
    });
    arrayIndex = arrayDel.indexOf(arrayDel[i]);
    arrayDel.splice(arrayIndex, 1);
    //string = Number(arrayDel.join(''));
    string = arrayDel.join('');
    if (string > result){
      result = string;
    }
    //console.log('arrayD=', arrayD, 'arrayDel=', arrayDel, 'string=', string, 'result=', result);
    arrayDel = [];
  }
  return Number(result);
}

console.log(deleteDigit(152));//, 52);
//console.log(deleteDigit(1001));//, 101);
//console.log(deleteDigit(10));//, 1);
//console.log(deleteDigit(222219));//, 22229);
//console.log(deleteDigit(109));//, 19);
//console.log(deleteDigit(342));//, 42);

// console.log();

module.exports = {
  deleteDigit
};
