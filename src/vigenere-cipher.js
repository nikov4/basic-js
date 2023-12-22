const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor (mode){
    this.mode = mode;
  }

  // encrypt
  encrypt(string, keyword) {
    this.string = string;
    this.keyword = keyword;
    //console.log('this.mode=', this.mode, 'this.string=', this.string, 'this.keyword=', this.keyword);
    if (this.string !== undefined && this.keyword !== undefined) {
      // create tabula recta matrix
      const tabulaRecta = new Map();
      let array = [];
      let arrayNum = [];
      let k = 0, j = 0;
      for (let i = 65; i <= 90; i += 1) {
        arrayNum.push(String.fromCharCode(i));
        for (j = i; j <= 90; j += 1) {
          array.push(String.fromCharCode(j));
        }
        for (k = 65; k < i; k += 1) {
          array.push(String.fromCharCode(k));
        }
        tabulaRecta.set(String.fromCharCode(i), array);
        array = [];
      }
      j = k = 0;
      //console.log('arrayNum[Array]=', arrayNum);
      //console.log('tabulaRecta[Map]:', tabulaRecta);
      // split string to array
      const stringArray = string.toUpperCase().split('');
      // inflate keyword to string equal length
      let keywordUpper = keyword.toUpperCase()
      let keywordArray = keywordUpper.split('');
      if (keyword.length < string.length) {
        keywordUpper = '';
        for (let i = 0; i < string.length; i += 1) {
          if (stringArray[i].charCodeAt(0) >= 65 && stringArray[i].charCodeAt(0) <= 90) {
            if (j >= keyword.length) {
              j = 0;
            }
            keywordUpper = keywordUpper.concat(keywordArray[j]);
            j += 1;
          } else {
            keywordUpper = keywordUpper.concat(stringArray[i]);
          }
        }
      }
      keywordArray = keywordUpper.split('');
      //console.log('stringArray=', stringArray, 'keywordArray=', keywordArray);
      // replece string with keyword
      let result = '';
      for (let i = 0; i < string.length; i += 1) {
        //console.log('stringArray[i]=', stringArray[i], 'stringArray[i]CharCode=', stringArray[i].charCodeAt(0), 'keywordArray[i]=', keywordArray[i], 'tabulaRecta[Map]=', tabulaRecta.get(stringArray[i]));
        //console.log('tabulaRecta=', tabulaRecta.get(stringArray[i])[arrayNum.indexOf(keywordArray[i])]);
        if (stringArray[i].charCodeAt(0) >= 65 && stringArray[i].charCodeAt(0) <= 90) {
          result = result.concat(tabulaRecta.get(stringArray[i])[arrayNum.indexOf(keywordArray[i])]);
        } else {
          result = result.concat(stringArray[i]);
        }
      }
      // reverse machine
      if (this.mode === false) {
        let resultArray = result.split('');
        resultArray = resultArray.reverse();
        result = resultArray.join('');
      }
      return result;
    } else {
      throw new NotImplementedError('Not implemented');
    }
  }

  // decrypt
  decrypt(string, keyword) {
    this.string = string;
    this.keyword = keyword;
    //console.log('this.mode=', this.mode, 'this.string=', this.string, 'this.keyword=', this.keyword);
    if (this.string !== undefined && this.keyword !== undefined) {
      // create tabula recta matrix
      const tabulaRecta = new Map();
      let array = [];
      let arrayNum = [];
      let k = 0, j = 0;
      for (let i = 65; i <= 90; i += 1) {
        arrayNum.push(String.fromCharCode(i));
        for (j = i; j <= 90; j += 1) {
          array.push(String.fromCharCode(j));
        }
        for (k = 65; k < i; k += 1) {
          array.push(String.fromCharCode(k));
        }
        tabulaRecta.set(String.fromCharCode(i), array);
        array = [];
      }
      j = k = 0;
      //console.log('arrayNum[Array]=', arrayNum);
      //console.log('tabulaRecta[Map]:', tabulaRecta);
      // split string to array
      const stringArray = string.toUpperCase().split('');
      // inflate keyword to string equal length
      let keywordUpper = keyword.toUpperCase()
      let keywordArray = keywordUpper.split('');
      if (keyword.length < string.length) {
        keywordUpper = '';
        for (let i = 0; i < string.length; i += 1) {
          if (stringArray[i].charCodeAt(0) >= 65 && stringArray[i].charCodeAt(0) <= 90) {
            if (j >= keyword.length) {
              j = 0;
            }
            keywordUpper = keywordUpper.concat(keywordArray[j]);
            j += 1;
          } else {
            keywordUpper = keywordUpper.concat(stringArray[i]);
          }
        }
      }
      keywordArray = keywordUpper.split('');
      //console.log('stringArray=', stringArray, 'keywordArray=', keywordArray);
      // replece string with keyword
      let result = '';
      for (let i = 0; i < string.length; i += 1) {
        //console.log('stringArray[i]=', stringArray[i], 'stringArray[i]CharCode=', stringArray[i].charCodeAt(0), 'keywordArray[i]=', keywordArray[i], 'tabulaRecta[Map]=', tabulaRecta.get(keywordArray[i]));
        if (stringArray[i].charCodeAt(0) >= 65 && stringArray[i].charCodeAt(0) <= 90) {
          //console.log('tabulaRecta=', tabulaRecta.get(stringArray[i]));
          result = result.concat(arrayNum[tabulaRecta.get(keywordArray[i]).indexOf(stringArray[i])]);
          //console.log(tabulaRecta.get(keywordArray[i]), 'arrayNum.indexOf', stringArray[i], '=', tabulaRecta.get(keywordArray[i]).indexOf(stringArray[i]), 'tabulaRecta=', arrayNum[tabulaRecta.get(keywordArray[i]).indexOf(stringArray[i])]);
        } else {
          result = result.concat(stringArray[i]);
        }
      }
      // reverse machine
      if (this.mode === false) {
        let resultArray = result.split('');
        resultArray = resultArray.reverse();
        result = resultArray.join('');
      }
      return result;
    } else {
      throw new NotImplementedError('Not implemented');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
