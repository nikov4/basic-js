const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let team = [];
  if (Array.isArray(members) === true){
    members.forEach((element) => {
      if (typeof element === 'string' && element !== ''){
        element = element.replace(/[\s]+/g, '');
        team.push(element[0].toUpperCase());
        team = team.sort();
      }
    });
    if (team.length > 0) {
      return team.join('');
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
