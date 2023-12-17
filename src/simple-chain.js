const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain : [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //let posFixed = position.toFixed(0);
    //if (typeof position === 'number' && position === posFixed) {
    if (typeof position === 'number') {
      position = position - 1;
      this.chain.splice(position, 1);
      //this.chain.filter(item => item !== this.chain[position])
      return this;
    } else {
      this.chain = [];
      throw new NotImplementedError(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let chn = '';
    for (let i = 0; i < this.chain.length; i += 1){
      chn = chn.concat('( ', this.chain[i], ' )');
      if (i < (this.chain.length - 1)){
        chn = chn.concat('~~');
      }
    }
    this.chain = [];
    return chn;
  }
};

module.exports = {
  chainMaker
};
