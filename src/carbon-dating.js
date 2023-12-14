const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let t = 0;
  let sample = 0;
  const k = 0.693 / HALF_LIFE_PERIOD;
  // if (typeof sampleActivity === 'string' && sampleActivity !== '' && sampleActivity !== null && sampleActivity !== undefined && sampleActivity !== NaN) {
  if (typeof sampleActivity === 'string' && sampleActivity !== '') {
      sample = Number(sampleActivity);
    if (sample > 0 && sample < 15) {
      t = Math.log(MODERN_ACTIVITY / sample);
      t = t / k;
      return Math.ceil(t);
    }
    return false;
  }
  return false;
}

module.exports = {
  dateSample
};
