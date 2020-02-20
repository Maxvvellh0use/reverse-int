module.exports = function reverse (n) {
    if (n < 0) {
        const result = String(n).split('');
        result.shift();
        const revNum = result.reverse();
        return Number(revNum.join(''))
    }
    const result = Number(String(n).split('').reverse().join(''));
    return result;
};
