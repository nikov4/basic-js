const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr) === true ) {
    newArr = [];
    let prevItem = 0, nextItem = 0;
    for (let i = 0; i <= arr.length; i += 1){
      prevItem = arr[i - 1];
      nextItem = arr[i + 1];
      // console.log(arr, typeof prevItem, 'prevItem=', prevItem, typeof nextItem, 'nextItem=', nextItem);
      if (typeof nextItem === 'string' || typeof prevItem === 'string') {
        //prev
        //if (nextItem !== '--discard-prev' && prevItem !== '--discard-next' && nextItem !== '--discard-next') {
        if (nextItem !== '--discard-prev' && prevItem !== '--discard-next') {
          if (arr[i] !== undefined && (typeof arr[i] !== 'string' || (arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== '--double-next'))) {
            //console.log('string', 'prevItem=', prevItem, 'nextItem=', nextItem);
            newArr.push(arr[i]);
          }
        }
        if (nextItem === '--double-prev' && prevItem !== '--discard-next') {
          //console.log('string double-prev', 'prevItem=', prevItem, 'nextItem=', nextItem);
          if (arr[i] !== undefined) {
            newArr.push(arr[i]);
          }
        }
        if (prevItem === '--double-next') {
          //console.log('string double-next', 'prevItem=', prevItem, 'nextItem=', nextItem);
          if (arr[i] !== undefined) {
            newArr.push(arr[i]);
          }
        }
      } else {
        // current
        if (arr[i] !== undefined && (typeof arr[i] !== 'string' || (arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== '--double-next'))) {
          //console.log('current');
          newArr.push(arr[i]);
        }
      }
    }
    return newArr;
  } else {
    throw new NotImplementedError(`'arr' parameter must be an instance of the Array!`);
  }
}
module.exports = {
  transform
};
