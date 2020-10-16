function isModest(num) {
  function isModest(num) {
    let numString = num.toString();
    for (i = 0; i < numString.length; i++) {
        let left = parseInt(numString.substr(0, i + 1));
        let right = parseInt(numString.substr(i + 1, numString.length));
        if (num % right === left)
            return true
    }
    return false
}

module.exports = {isModest};
