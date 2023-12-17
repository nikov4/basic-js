const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const Seasons = ['winter', 'spring', 'summer', 'autumn', 'winter'];
  const MonthsNum = new Map([
    ['1', 'winter'],
    ['2', 'winter'],
    ['3', 'spring'],
    ['4', 'spring'],
    ['5', 'spring'],
    ['6', 'summer'],
    ['7', 'summer'],
    ['8', 'summer'],
    ['9', 'autumn'],
    ['10', 'autumn'],
    ['11', 'autumn'],
    ['12', 'winter'],
  ]);
  const Months = new Map([
    ['Jan', '1'],
    ['Feb', '2'],
    ['Mar', '3'],
    ['Apr', '4'],
    ['May', '5'],
    ['Jun', '6'],
    ['Jul', '7'],
    ['Aug', '8'],
    ['Sep', '9'],
    ['Oct', '10'],
    ['Nov', '11'],
    ['Dec', '12'],
  ]);
  const dateEmpty = 'Unable to determine the time of year!';
  const dateWrong = 'Invalid date!';
  let mon = [];
  if (date !== undefined) {
    if (typeof date === 'object'){
      // mon = date.getMonth();
      // console.log('mon=',mon);
      // console.log(typeof mon);
      mon = date.toString().split(' ');
      // console.log(Array.isArray(mon));
      if (Array.isArray(mon) === true && mon.length > 1 && Array.hasOwnProperty('getMonth')) {
        // console.log('type of mon =', typeof mon);
        // console.log('mon=',mon);
        // console.log('type of mon[1]=', typeof mon[1]);
        // console.log('mon[1]=',mon[1]);
        // console.log(mon[1].length);
        if (mon[1].length === 3){
          // console.log('season=', MonthsNum.get(Months.get(mon[1])));
          return MonthsNum.get(Months.get(mon[1]));
        } else {
          throw new NotImplementedError('Invalid date!');
          // return dateWrong;
        }
      } else {
        throw new NotImplementedError('Invalid date!');
        // return dateWrong;
      }
    } else {
      throw new NotImplementedError('Invalid date!');
      // return dateWrong;
    }
  } else {
    return dateEmpty;
  }
}

module.exports = {
  getSeason
};
