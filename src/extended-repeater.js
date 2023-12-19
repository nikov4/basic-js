const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '', repeatTimes = 0, separator = '', addition = '', additionRepeatTimes = 0, additionSeparator = '';
  repeatTimes = options['repeatTimes'];
  separator = options['separator'];
  addition = String(options['addition']);
  additionRepeatTimes = options['additionRepeatTimes'];
  additionSeparator = options['additionSeparator'];
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  if (separator === undefined) {
    separator = '+';
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  if (additionSeparator === undefined) {
    additionSeparator = '|';
  }
  //console.log('result=', result, 'repeatTimes=', repeatTimes, 'separator=', separator, 'addition=',  addition, 'additionRepeatTimes=', additionRepeatTimes, 'additionSeparator=', additionSeparator);
  if (repeatTimes > 0){
    for (let i = 0; i < repeatTimes; i += 1) {
      result = result.concat(str);
      if (addition !== undefined && additionRepeatTimes > 0) {
        for (let j = 0; j < additionRepeatTimes; j += 1) {
          if (j === (additionRepeatTimes - 1)) {
            if (addition !== 'undefined') {
              result = result.concat(addition);
            }
          } else if (addition !== undefined) {
            result = result.concat(addition, additionSeparator);
          }
        }
      }
      if (i !== (repeatTimes - 1)) {
        result = result.concat(separator);
      }
    }
    return result;
  }
}

module.exports = {
  repeater
};
