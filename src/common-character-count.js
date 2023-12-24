const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0, indexBig = 0, indexSmall = 0, string = '', length = 0;
  let arrayBig = [];
  let arraySmall = [];
  if (typeof s1 !== undefined && typeof s2 !== undefined) {
    if (s1.leigth > s2.leigth) {
      arrayBig = Array.from(s1);
      arraySmall = Array.from(s2);
      string = s2;
    } else {
      arrayBig = Array.from(s2);
      arraySmall = Array.from(s1);
      string = s1;
    }
    length = arrayBig.length;
    //
    //console.log('arraySmall=', arraySmall, 'arrayBig=', arrayBig, 'arrayBig length==', length);
    for (let i = 0; i < length; i += 1) {
      //console.log(i, 'string', string, 'include arrayBig[i]', arrayBig[i]);
      if (string.includes(arrayBig[i])) {
        count += 1;
        //console.log(i, 'found arrayBig[i]', arrayBig[i], 'count=', count);
        indexBig = arrayBig.indexOf(arrayBig[i]);
        indexSmall = arraySmall.indexOf(arrayBig[i]);
        // del from arrayBig
        arrayBig.splice(indexBig, 1);
        //console.log('shift arrayBig, now:', arrayBig);
        arraySmall = Array.from(string);
        // del from arraySmall
        arraySmall.splice(indexSmall, 1);
        string = arraySmall.join('');
        //console.log('shift arraySmall, now:', arraySmall);
        i = i - 1;
      }
    }
    return count;
  }
}

module.exports = {
  getCommonCharacterCount
};
